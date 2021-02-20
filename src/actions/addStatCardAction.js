const addStatCardAction = (
    statName: statName,
    statDescription: statDescription,
    statIcon: statIcon,
    statIconColor: statIconColor,
    statFooterIcon: statFooterIcon,
    statFooterIconState: statFooterIconState,
    statFooterPercentage: statFooterPercentage,
    statFooterText: statFooterText,
) => async dispatch => {
    // here w`ll make a call to our database
    //to add our new stat card with the above details
    dispatch({
        type: "addStatCard",
        payload: {
            statName,
            statDescription,
            statIcon,
            statIconColor,
            statFooterIcon,
            statFooterIconState,
            statFooterPercentage,
            statFooterText,
        }
    })
}

export default addStatCardAction;