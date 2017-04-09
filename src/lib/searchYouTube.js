var searchYouTube = (options, callback) => {
  $.ajax({
    cache: false,
    data: {
      key: window.YOUTUBE_API_KEY,
      q: '',
      part: 'snippet'
    },
    dataType: 'json',
    type: 'GET',
    timeout: 2000,
    url: 'https://www.googleapis.com/youtube/v3/search',
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.error('Failed to retrieve video list', data);
    }
  });
};

window.searchYouTube = searchYouTube;
