import { VideoResponse } from "../interfaces";
import VideoListItem from "./video_list_item";

interface Props {
  videos: VideoResponse[]
}

function VideoList (props: Props) {
  const videoItems = props?.videos.map((video: VideoResponse )=> {
    return (
      <VideoListItem
        key={video?.id?.videoId}
        video={video}
      />
    )
  })

  return <ul className="col-md-4 list-group">{videoItems}</ul>
}

export default VideoList;
