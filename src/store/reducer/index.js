export const initialState = {
    verticalArray: Array(20).fill(false),
    horizontalArray:Array(20).fill(false),
    paintingArray:Array(16).fill(false),
    playerScore1:0,
    playerScore2:0,
    currentPlayer:false,
};


export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_VERTICAL_ARRAY":
            return {
                ...state,
                verticalArray:action.payload
                 };
        case "SET_HORIZONTAL_ARRAY":
            return {
                ...state,
                horizontalArray:action.payload
            };
        case "SET_PAINTING_ARRAY":
            return {
                ...state,
                paintingArray:action.payload
            };

        case "SET_CURRENT_PLAYER1":
            return {
                ...state,
                currentPlayer:false
            };
        case "SET_CURRENT_PLAYER2":
            return {
                ...state,
                currentPlayer:true
            };
        case "SET_SCORE_PLAYER1":
            return {
                ...state,
                playerScore1:action.payload
            };
        case "SET_SCORE_PLAYER2":
            return {
                ...state,
                playerScore2:action.payload
            };

        default:
            return state;
    }
};
