import { useDispatch } from "react-redux";
import { VideoResponse } from "../interfaces";
import allActions from "../redux/actions";

interface Props {
  video: any
}

function VideoListItem(props: Props) {
  const imageUrl = props.video?.snippet?.thumbnails?.default?.url ?? ""
  const dispatch = useDispatch()
  const dispatchSelectedVideo = (video: VideoResponse) => {
    dispatch(allActions.videoSelectedActions.selectNewVideo(video))
  }
  return (
    <li onClick={() => dispatchSelectedVideo(props?.video)} className="list-group-item">
      <div className="videoList media">
        <div className="selected-video">
          {imageUrl !== "" ? <img className="imageUrl" alt="" src={imageUrl} /> : ""}
        </div>
        <div className="selected-video-body">
          <div className="selected-video-title">{props?.video?.snippet?.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
