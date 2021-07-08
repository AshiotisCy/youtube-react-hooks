const setVideoSelected = (videos: any) => {
    return {
        type: "VIDEOS_LIST",
        payload: videos
    }
}

const selectNewVideo = (video: any) => {
    return {
        type: "VIDEO_SELECTED",
        video: video
    }
}

export default {
    setVideoSelected,
    selectNewVideo
}