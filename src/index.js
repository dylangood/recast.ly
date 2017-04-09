// TODO: Render the `App` component to the DOM



var returnResults = function(data) {
  ReactDOM.render(<App currentVideo={data.items[0]} videoList={data.items}/>, document.getElementById('app') );
};

window.searchYouTube({}, returnResults);
