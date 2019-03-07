module Elm.Tests exposing (suite)

import Expect
import Test exposing (Test, describe, test)


suite : Test
suite =
    describe "name"
        [ test "First passing test" <|
            \_ ->
                Expect.true "True should be true." True
        , test "This one should now pass" <|
            \_ ->
                Expect.true "True should not be false." (not False)
        ]
