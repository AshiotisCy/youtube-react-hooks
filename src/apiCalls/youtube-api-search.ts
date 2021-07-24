const axios = require('axios');

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';


export function YTSearch(options: {[k:string]: string}, callback: any) {

  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }
  const params = {
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video'
  };

  axios.get(ROOT_URL, { params: params })
    .then(function(response: any) {
      if (callback) {
        callback(response);
      }
      // if (callback && response.status === 200) {
      //   callback(response.data.items);
      // }
      // else if (callback && response.status !== 200) {
      //   callback(response.statusText);
      // }
    })
    .catch(function(error:any) {
      console.error(error);
    });
};
