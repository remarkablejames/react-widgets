import VideoItem from "./VideoItem";

function VideoList({ videos }) {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} />;
  });

  return (
    <div>
      {videos.length}
      <div>{renderedList}</div>
    </div>
  );
}
export default VideoList;
