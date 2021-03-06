const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "/../public");

app.use(express.static(publicPath));
const port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log(`Server is up on ${port}`);
});