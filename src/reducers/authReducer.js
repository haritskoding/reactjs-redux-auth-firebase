export default (
    state = {},
    action
) => {
    switch (action.type) {
        case "register":
            console.log("register is", action.payload);
            return {
                ...state,
                loggedIn: action.payload
            }
            break;
        case "login":
            console.log("logge is", action.payload);
            return {
                ...state,
                loggedIn: action.payload
            }
        default: return state;
    }
}