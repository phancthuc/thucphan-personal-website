const express = require('express');
const app = express();

// Serve your React app (assuming it's built in the 'build' folder)
app.use(express.static('build'));

// Add custom configuration for SVG files
app.use((req, res, next) => {
  if (req.url.endsWith('.svg') || req.url.endsWith('.svgz')) {
    res.setHeader('Content-Type', 'image/svg+xml');
  }
  next();
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
