const ytdl = require("ytdl-core");

async function getInfoController($request, $response) {
  const url = $request.query.url;

  try {
    const downloadInfo = await ytdl.getInfo(url);
    return $response.status(200).json(downloadInfo);
  } catch (error) {
    return $response.status(404).json({
      message: "invalid url try new url!",
    });
  }
}

async function downloadController($request, $response) {
  const url = $request.query.url;
  const container = $request.query.container;
  const itag = $request.query.itag;

  const info = await ytdl.getInfo(url);

  const format = ytdl.chooseFormat(info.formats, { quality: itag });
  if (!format && typeof format != "object") {
    return $response.status(404).json({
      message: "something worn!",
    });
  }

  $response.header(
    "Content-disposition",
    `attachment; filename=${info.videoDetails.title}.${container}`
  );

  ytdl(url, {
    filter: (format) => (format.itag = itag),
  }).pipe($response);
}

module.exports = {
  downloadController,
  getInfoController,
};
