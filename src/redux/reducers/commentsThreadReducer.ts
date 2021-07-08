const commentsThreadReducer = (state = null, action: any) => {

    switch (action?.type) {
        case "COMMENTS_THREAD_RESPONSE":
            return action.response
        case "COMMENTS_THREAD_ERROR_MESSAGE":
            return action.errorMessage
        default:
            return state
    }
}

export default commentsThreadReducer;