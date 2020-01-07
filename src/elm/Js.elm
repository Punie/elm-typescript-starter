port module Js exposing
    ( load, log, store
    , Message(..), receive
    )

{-| This module is intended to be the sole repository for communication between
elm and javascript.

It provides high level commands to send well typed messages to javascript and a
`Message` type representing all the kinds of values javascript might send
through the `receive` subscription.


# To JS

@docs load, log, store


# From JS

@docs Message, receive

-}

import Json.Decode as Decode
import Json.Encode as Encode exposing (Value)



-- To JS


{-| Ask JS to load dynamic libraries
-}
load : () -> Cmd msg
load _ =
    ToJS "load" Encode.null
        |> command


{-| Ask JS to console.log a String
-}
log : String -> Cmd msg
log str =
    ToJS "log" (Encode.string str)
        |> command


{-| Ask JS to put an Int in localStorage
-}
store : Int -> Cmd msg
store n =
    ToJS "store" (Encode.int n)
        |> command



-- From JS


{-| The type of messages coming from JS with their associated values.
-}
type Message
    = Tick Int
    | Invalid


{-| This is the common application entry point for all values coming from JS.

    type Msg
        = Received Js.Message

    update msg model =
        case msg of
            Received jsMsg ->
                -- interpret jsMsg here

    subscriptions _ =
        Js.receive Received

-}
receive : (Message -> msg) -> Sub msg
receive toMsg =
    notification (dispatch >> toMsg)



-- JS Interop (low level)


port command : ToJS -> Cmd msg


port notification : (FromJS -> msg) -> Sub msg


type alias ToJS =
    { kind : String
    , value : Value
    }


type alias FromJS =
    { kind : String
    , value : Value
    }



-- HELPERS


dispatch : FromJS -> Message
dispatch { kind, value } =
    case kind of
        "tick" ->
            Tick (decodeInt value)

        _ ->
            Invalid


decodeInt : Value -> Int
decodeInt value =
    Decode.decodeValue Decode.int value
        |> Result.withDefault 0
