const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { getInformation } = require("./src/Utils/Connection.js");
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  await getInformation()
  console.log(`Server listening on port http://localhost${PORT}`);
})
}).catch(error => console.error(error))