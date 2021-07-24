const axios = require('axios');

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/commentThreads';


export function YTCommentThreads(options: {[k:string]: string}, callback: any) {

  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined')
  }
  const params = {
    key: options.key,
    textFormat: options.textFormat,
    part: options.part,
    videoId: options.videoId,
    maxResults: options.maxResults
  }
    axios.get(ROOT_URL, { params: params })
    .then(function(response: any) {
      if (callback) { callback(response) }
    })
    .catch(function(error: any) {
      console.error(error)
    })
}