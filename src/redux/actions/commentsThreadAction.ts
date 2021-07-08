const commentsThread = (data: any) => {
    return {
        type: 'COMMENTS_THREAD_RESPONSE',
        response: data
    }
}

const commentsThreadErrorMessage = (errorMessage: any) => {
    return {
        type: 'COMMENTS_THREAD_ERROR_MESSAGE',
        errorMessage: errorMessage
    }
}

export default {
    commentsThread,
    commentsThreadErrorMessage
}
