const getAllStatCardsAction = () => async dispatch => {
    //here we will make a call to our database;
    //that will retrieve all of our stat cards

    dispatch({
        type: "getAllStatCards",
        payload: {

        }
    })
}

export default getAllStatCardsAction;