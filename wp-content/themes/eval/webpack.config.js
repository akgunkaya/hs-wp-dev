const path = require("path");

module.exports = {
  entry: "./src/js/index.js", // Path to your main JS file
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output bundle file name
  },
};
