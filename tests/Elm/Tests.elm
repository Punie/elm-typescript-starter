module Elm.Tests exposing (suite)

import Expect
import Fuzz exposing (string)
import Test exposing (Test, describe, fuzz, test)


suite : Test
suite =
    describe "name"
        [ test "First passing test" <|
            \_ ->
                Expect.true "True should be true." True
        , test "This one should now pass" <|
            \_ ->
                Expect.true "True should not be false." (not False)
        , fuzz string "restores the original string if you run it again" <|
            \randomlyGeneratedString ->
                randomlyGeneratedString
                    |> String.reverse
                    |> String.reverse
                    |> Expect.equal randomlyGeneratedString
        ]
