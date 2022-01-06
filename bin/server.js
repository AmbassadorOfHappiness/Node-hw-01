const app = require("../app");
require("../helpers");
const connectDB = require('../config/db');

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.cyan);
});

process.on('unhandledRejection', (err, _) => {
  if (err) {
    console.log(`Server not running. Error: ${err.message}`.red)
    process.exit(1)
 }
})

