



const VideoPlayer = ({ videoId }) => {
  return (
    <div className="w-full aspect-video ">
      <iframe
        className="w-full h-[80%]"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
