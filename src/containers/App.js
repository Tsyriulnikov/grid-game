/* eslint-disable default-case */
import React, {useReducer} from 'react';
import './App.css';
import GameField from "../components/game_field";
import {initialState, reducer} from "../store/reducer";
import COLOR_PLAYER_1 from "../images/player1.jpeg";
import COLOR_PLAYER_2 from "../images/player2.jpg";
const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const COLOR_CLICK = "red";
    const {verticalArray, horizontalArray, paintingArray, currentPlayer, playerScore1, playerScore2} = state;
//Push game over
    const setGameOver = () =>{
        window.location.reload();
    };


    //Set current player
    const setCurrentPlayer = () => {
        if (currentPlayer) {
            dispatch({
                type: "SET_CURRENT_PLAYER1",
            });
            document.getElementById('playerScore1').style.background = COLOR_CLICK;
            document.getElementById('playerScore2').style.background = 'none';
        } else {
            dispatch({
                type: "SET_CURRENT_PLAYER2",
            });
            document.getElementById('playerScore2').style.background = COLOR_CLICK;
            document.getElementById('playerScore1').style.background = 'none';
        }
    };
    const setScore = (quantityPaintDiv, indexPaintingElement) => {
        if (currentPlayer) {
            document.getElementById(`p${indexPaintingElement}`).style.backgroundImage=`url(${COLOR_PLAYER_2})`;
            dispatch({
                type: "SET_SCORE_PLAYER2",
                payload: playerScore2 + quantityPaintDiv
            });
            paintingArray[indexPaintingElement] = true;
            dispatch({
                type: "SET_PAINTING_ARRAY",
                payload: paintingArray,
            });

        } else {
            document.getElementById(`p${indexPaintingElement}`).style.backgroundImage=`url(${COLOR_PLAYER_1})`;
            dispatch({
                type: "SET_SCORE_PLAYER1",
                payload: playerScore1 + quantityPaintDiv
            });
            paintingArray[indexPaintingElement] = true;
            dispatch({
                type: "SET_PAINTING_ARRAY",
                payload: paintingArray,
            });
        }
    };
    const setVerticalArray = (clickDivNumber, elementById) => {
        verticalArray[clickDivNumber] = true;
        document.getElementById(elementById).style.background = COLOR_CLICK;
        dispatch({
            type: "SET_VERTICAL_ARRAY",
            payload: verticalArray,
        });
    };
    const setHorizontalArray = (clickDivNumber, elementById) => {
        horizontalArray[clickDivNumber] = true;
        document.getElementById(elementById).style.background = COLOR_CLICK;
        dispatch({
            type: "SET_HORIZONTAL_ARRAY",
            payload: horizontalArray,
        });
    };

    //checking for score
    const checkByPainting=(elementById)=>{
        let quantityPaintDiv=0;
        let indexPaintingElement;
        //check p0 by paint
        //first row

        if ((verticalArray[0] && verticalArray[1] && horizontalArray[0] && horizontalArray[4])&&
        (elementById=='v0'||elementById=='v1'||elementById=='h0'||elementById=='h4')) {
            indexPaintingElement=0;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[1] && verticalArray[2] && horizontalArray[1] && horizontalArray[5])&&
            (elementById=='v1'||elementById=='v2'||elementById=='h1'||elementById=='h5')) {
            indexPaintingElement=1;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[2] && verticalArray[3] && horizontalArray[2] && horizontalArray[6])&&
            (elementById=='v2'||elementById=='v3'||elementById=='h2'||elementById=='h6')) {
            indexPaintingElement=2;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }

        if ((verticalArray[3] && verticalArray[4] && horizontalArray[3] && horizontalArray[7])&&
            (elementById=='v3'||elementById=='v4'||elementById=='h3'||elementById=='h7')) {
            indexPaintingElement=3;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
    //second row
        if ((verticalArray[5] && verticalArray[6] && horizontalArray[4] && horizontalArray[8])&&
            (elementById=='v5'||elementById=='v6'||elementById=='h4'||elementById=='h8')) {
            indexPaintingElement=4;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[6] && verticalArray[7] && horizontalArray[5] && horizontalArray[9])&&
            (elementById=='v6'||elementById=='v7'||elementById=='h5'||elementById=='h9')) {
            indexPaintingElement=5;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[7] && verticalArray[8] && horizontalArray[6] && horizontalArray[10])&&
            (elementById=='v7'||elementById=='v8'||elementById=='h6'||elementById=='h10')) {
            indexPaintingElement=6;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[8] && verticalArray[9] && horizontalArray[7] && horizontalArray[11])&&
            (elementById=='v8'||elementById=='v9'||elementById=='h7'||elementById=='h11')) {
            indexPaintingElement=7;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
//third row
        if ((verticalArray[10] && verticalArray[11] && horizontalArray[8] && horizontalArray[12])&&
            (elementById=='v10'||elementById=='v11'||elementById=='h8'||elementById=='h12')) {
            indexPaintingElement=8;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[11] && verticalArray[12] && horizontalArray[9] && horizontalArray[13])&&
            (elementById=='v11'||elementById=='v12'||elementById=='h9'||elementById=='h13')) {
            indexPaintingElement=9;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[12] && verticalArray[13] && horizontalArray[10] && horizontalArray[14])&&
            (elementById=='v12'||elementById=='v13'||elementById=='h10'||elementById=='h14')) {
            indexPaintingElement=10;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[13] && verticalArray[14] && horizontalArray[11] && horizontalArray[15])&&
            (elementById=='v13'||elementById=='v14'||elementById=='h11'||elementById=='h15')) {
            indexPaintingElement=11;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        //fourth row
        if ((verticalArray[15] && verticalArray[16] && horizontalArray[12] && horizontalArray[16])&&
            (elementById=='v15'||elementById=='v16'||elementById=='h12'||elementById=='h16')) {
            indexPaintingElement=12;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[16] && verticalArray[17] && horizontalArray[13] && horizontalArray[17])&&
            (elementById=='v16'||elementById=='v17'||elementById=='h13'||elementById=='h17')) {
            indexPaintingElement=13;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[17] && verticalArray[18] && horizontalArray[14] && horizontalArray[18])&&
            (elementById=='v17'||elementById=='v18'||elementById=='h14'||elementById=='h18')) {
            indexPaintingElement=14;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
        if ((verticalArray[18] && verticalArray[19] && horizontalArray[15] && horizontalArray[19])&&
            (elementById=='v18'||elementById=='v19'||elementById=='h15'||elementById=='h19')) {
            indexPaintingElement=15;
            quantityPaintDiv=quantityPaintDiv+1;
            setScore(quantityPaintDiv,indexPaintingElement);
        }
    };
    //Push on div
    const handleClickDiv = e => {
            let elementById = e.target.id;
            let clickDivType = elementById[0]; //vertical div or horizontal div has been clicked. v or h
            let clickDivNumber = elementById.substring(1);//number div 0-19

            switch (clickDivType) {
                case "v": 
                    if (verticalArray[clickDivNumber] === false
                    ) {
//push vertical div
                        setVerticalArray(clickDivNumber, elementById);
                        setCurrentPlayer();
                        checkByPainting(elementById);
                      //end check p0 by paint
                    }
                
                    break;
                case
                "h"
                : {
                    if (horizontalArray[clickDivNumber] === false
                    ) {
//Push horizontal div
                        setHorizontalArray(clickDivNumber, elementById);
                        setCurrentPlayer();
                        checkByPainting(elementById);
                         }
                    break;
                }

            }
        }
    ;

    return (

        <GameField handleClickDiv={handleClickDiv} setGameOver={setGameOver}
                   playerScore1={playerScore1} playerScore2={playerScore2}/>

    )
};
export default App;
