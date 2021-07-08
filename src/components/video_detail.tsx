const VideoDetail = (data: any) => {
  if (data?.video === null || !data?.video) {
    return <div>Loading...</div>;
  }

  const videoId = data.video?.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="video-template embed-responsive embed-responsive-16by9">
        <iframe
          title={data.video?.snippet?.title ?? ""}
          className="embed-responsive-item"
          src={url}
        />
      </div>
      <div className="details">
        <div>{data.video?.snippet?.title ?? ""}</div>
        <div>{data.video?.snippet?.description ?? ""}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
