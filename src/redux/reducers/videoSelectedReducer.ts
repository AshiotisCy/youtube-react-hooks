const videoSelected = (state = null, action: any) => {
    const payload = action?.payload
    switch (action?.type) {
        case "VIDEOS_LIST":
            return payload[1]
        case "VIDEO_SELECTED":
            return action.video
        default:
            return state
    }
}

export default videoSelected