const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(cors());

app.get("/", ($req, $res) => {
  $res.sendFile(__dirname("public/index.html"));
});

app.get("/info/download", async ($request, $response) => {
  const url = $request.query.url;
  const downloadInfo = await ytdl.getInfo(url);
  $response.json(downloadInfo);
});

app.get("/downloads", ($request, $response) => {
  const url = $request.query.url;
  const container = $request.query.container;
  const itag = $request.query.itag;

  $response.header(
    "Content-disposition",
    `attachment; filename=vidos.${container}`
  );
  ytdl(url, {
    filter: (format) => (format.itag = itag),
  }).pipe($response);
});

app.listen(port, () => {
  console.log(`server is runnig in port ${port}`);
});
