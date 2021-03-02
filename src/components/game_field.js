import React from 'react';
import './game_field.css';


const GameField = (props) => {

      return (


         <div className="parent">

             <div>
                 <p id="playerScore1">Player1: {props.playerScore1}</p>
                 <p id="playerScore2">Player2: {props.playerScore2}</p>


                 <div id="clear_block"> </div>

                 <div id="h0" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h1" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h2" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h3" className="horizontal_div" onClick={props.handleClickDiv}> </div>

                 <div id="clear_block"> </div>

                 <div id="v0" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p0" className="painting_div"> </div>
                 <div id="v1" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p1" className="painting_div"> </div>
                 <div id="v2" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p2" className="painting_div"> </div>
                 <div id="v3" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p3" className="painting_div"> </div>
                 <div id="v4" className="vertical_div" onClick={props.handleClickDiv}> </div>

                 <div id="clear_block"> </div>

                 <div id="h4" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h5" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h6" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h7" className="horizontal_div" onClick={props.handleClickDiv}> </div>


                 <div id="clear_block"> </div>

                 <div id="v5" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p4" className="painting_div"> </div>
                 <div id="v6" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p5" className="painting_div"> </div>
                 <div id="v7" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p6" className="painting_div"> </div>
                 <div id="v8" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p7" className="painting_div"> </div>
                 <div id="v9" className="vertical_div" onClick={props.handleClickDiv}> </div>

                 <div id="clear_block"> </div>

                 <div id="h8" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h9" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h10" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h11" className="horizontal_div" onClick={props.handleClickDiv}> </div>

                 <div id="clear_block"> </div>

                 <div id="v10" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p8" className="painting_div"> </div>
                 <div id="v11" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p9" className="painting_div"> </div>
                 <div id="v12" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p10" className="painting_div"> </div>
                 <div id="v13" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p11" className="painting_div"> </div>
                 <div id="v14" className="vertical_div" onClick={props.handleClickDiv}> </div>

                 <div id="clear_block"> </div>

                 <div id="h12" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h13" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h14" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h15" className="horizontal_div" onClick={props.handleClickDiv}> </div>

                 <div id="clear_block"> </div>

                 <div id="v15" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p12" className="painting_div"> </div>
                 <div id="v16" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p13" className="painting_div"> </div>
                 <div id="v17" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p14" className="painting_div"> </div>
                 <div id="v18" className="vertical_div" onClick={props.handleClickDiv}> </div>
                 <div id="p15" className="painting_div"> </div>
                 <div id="v19" className="vertical_div" onClick={props.handleClickDiv}> </div>

                 <div id="clear_block"> </div>

                 <div id="h16" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h17" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h18" className="horizontal_div" onClick={props.handleClickDiv}> </div>
                 <div id="h19" className="horizontal_div" onClick={props.handleClickDiv}> </div>

                 <div id="clear_block"> </div>

                 <button onClick={props.setGameOver}>Game over</button>
             </div>

         </div>
    );
};
export default GameField;
