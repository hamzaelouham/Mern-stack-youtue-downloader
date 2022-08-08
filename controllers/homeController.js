function homeController($response) {
  $response.sendFile(__dirname("public/index.html"));
}

module.exports = homeController;
