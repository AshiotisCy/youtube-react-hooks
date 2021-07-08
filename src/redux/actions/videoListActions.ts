import { VideoResponse } from "../../interfaces"

const setVideoList = (videos: VideoResponse) => {
    return {
        type: "VIDEOS_LIST",
        payload: videos
    }
}

const setVideoListErrorMessage = (errorMessage: string) => {
    return {
        type: "VIDEOS_LIST_ERROR_MESSAGE",
        errorMessage: errorMessage
    }
}

export default {
    setVideoList,
    setVideoListErrorMessage
}