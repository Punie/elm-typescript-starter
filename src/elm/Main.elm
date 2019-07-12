module Main exposing (main)

import Browser
import Html exposing (Html)
import Html.Attributes
import Html.Events
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
    = Load
    | Received Message


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Load ->
            ( model, Js.load () )

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
        [ Html.Attributes.class "elm" ]
        [ Html.h1
            []
            [ Html.text model.content ]
        , Html.button
            [ Html.Events.onClick Load ]
            [ Html.text "Trigger Storage" ]
        ]
