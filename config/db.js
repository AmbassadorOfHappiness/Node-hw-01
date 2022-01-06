const { connect, connection } = require("mongoose");
require("../helpers");
const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  const db = await connect(uri);
  console.log(`MONGO DB are connected PORT: ${db.connection.port}, NAME: ${db.connection.name}, HOST: ${db.connection.host}`.cyan);
}

connection.on('err', (err) => {
  console.log(`Mongoose connection error: ${err.message}`);
});

connection.on('disconnected', () => {
  console.log('Mongoose disconnected from DB');
})

process.on('SIGINT', async () => {
  connection.close();
  console.log('Connection DB closed');
  process.exit(1)
})

module.exports = connectDB;