module Main exposing (main)

import Browser
import Html exposing (Html)
import Html.Attributes
import Js exposing (Message(..))



-- Application entry point


main : Program Flags Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }



-- MODEL


type alias Flags =
    String


type alias Model =
    { content : String }


init : Flags -> ( Model, Cmd Msg )
init str =
    let
        model =
            { content = str }

        cmd =
            Js.log "Hello JS from Elm! o/"
    in
    ( model, cmd )



-- UPDATE


type Msg
    = Received Message


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Received (Tick n) ->
            ( model, Js.store n )

        Received Invalid ->
            ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions _ =
    Js.receive Received



-- VIEW


view : Model -> Html Msg
view model =
    Html.div
        [ Html.Attributes.class "main" ]
        [ Html.text model.content
        ]
