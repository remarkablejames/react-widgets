function VideoItem({ video }) {
  return (
    <div>
      <div>
        <img src={video.snippet.thumbnails.medium.url} />
        {video.snippet.title}
      </div>
    </div>
  );
}

export default VideoItem;
