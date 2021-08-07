import React from "react";
import { useSelector, useDispatch, DefaultRootState } from 'react-redux'
import _ from "lodash";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import allActions from "./redux/actions";
import { YTCommentThreads } from './apiCalls/youtube-api-commentthreads';
import { YTSearch } from "./apiCalls/youtube-api-search";
import CommentList from "./components/commentSection/commentList";
import { CommentsResponse, VideoResponse } from "./interfaces";

const API_KEY = "AIzaSyCbcQMTPqAevOao2BQsQadm5SFTZljP2dM";

interface DefaultState extends DefaultRootState {
  counter: number,
  videoListReducer: VideoResponse[],
  videoSelectedReducer: VideoResponse,
  commentsThreadReducer: CommentsResponse[],
}

function App() {

  const videoList = useSelector((state: DefaultState) => state.videoListReducer)
  const videoSelected = useSelector((state: DefaultState) => state.videoSelectedReducer)
  const setComments = useSelector((state: DefaultState) => state.commentsThreadReducer)
  const dispatch = useDispatch()

  //React.useEffect get called only ones when the application has runned by calling the videoSearch function with the default value. 
  React.useEffect(() => {
    videoSearch("Mr Ranger")
  }, [])

  //called everytime the videoList state is getting changed
  React.useEffect(() => {
    if (!!videoSelected) {
      videoComments()
    }
  }, [videoSelected])

  //Calls the API for retrieving the videos list
  const videoSearch = (term: string) => {
    YTSearch({ key: API_KEY, term }, (response: VideoResponse) => {
      if (response.status === 200) {
        dispatch(allActions.videoListActions.setVideoList(response.data.items))
      }

    })
  }

  //Calls the API for retrieving the comments of the selected video
  const videoComments = () => {
    const selectedVideoId = videoSelected?.id.videoId

    if (!!selectedVideoId) {
      YTCommentThreads({ key: API_KEY, textFormat: 'plainText', part: 'snippet', videoId: selectedVideoId, maxResults: '10' }, (commentsResult: any) => {
        if (commentsResult.status === 200) {
          dispatch(allActions.commentsThreadActions.commentsThread(commentsResult.data.items))
        }
        else if (commentsResult.status !== 200) {
          dispatch(allActions.commentsThreadActions.commentsThreadErrorMessage(commentsResult.response.statusText))

          // To-Do work Create a panel to display error message if the API fails to load the data.
        }
      })
    }
  }

  const videoSearched = _.debounce((term) => {
    videoSearch(term)
  }, 300)

  return (
    <div className = "App">
      {console.log("state", videoList)}
      <SearchBar onSearchTermChange={videoSearched} />
      <VideoDetail video={videoSelected} />
      <VideoList
        videos={videoList ?? []}
      />
      <CommentList data={setComments ?? []} />
    </div>
  )

}

export default App;