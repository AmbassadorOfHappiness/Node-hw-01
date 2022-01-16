const {mkdir} = require('fs/promises');
const app = require("../app");
require("../helpers");
const connectDB = require('../config/db');

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, async() => {
  await mkdir(process.env.UPLOAD_DIR, { recursive: true });
  console.log(`Server running on port ${PORT}`.cyan);
});

process.on('unhandledRejection', (err, _) => {
  if (err) {
    console.log(`Server not running. Error: ${err.message}`.red)
    process.exit(1)
 }
})

