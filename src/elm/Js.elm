port module Js exposing
    ( log, store
    , Message(..), receive
    )

{-|


# From JS

@docs log, store


# To JS

@docs Message, receive

-}

import Json.Decode as Decode
import Json.Encode as Encode exposing (Value)



-- Public JS API


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


{-| The type of messages coming from JS with their associated values.
-}
type Message
    = Tick Int
    | NoOp


{-| This is the common application entry point for all values coming from JS.

    type Msg
        = Received Js.Message

    update (Received jsMsg) model =
        case jsMsg of
            -- This is where you interpret the messages coming from JS

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
            decodeInt value
                |> Tick

        _ ->
            NoOp


decodeInt : Value -> Int
decodeInt value =
    Decode.decodeValue Decode.int value
        |> Result.withDefault 0
