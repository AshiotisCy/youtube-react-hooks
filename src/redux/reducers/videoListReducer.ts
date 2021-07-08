const videoList = (state = null, action: any) => {
    const payload = action?.payload
    switch (action?.type) {
        case "VIDEOS_LIST":
            return payload
        case "VIDEOS_LIST_ERROR_MESSAGE":
            return payload
        default:
            return state
    }
}

export default videoList