import "dotenv/config";
import app from "./app.js";

var PORT = process.env.API_PORT;

app.listen(PORT, () => {
  console.log(`[Server] Server running and listening on port ${PORT}`);
});
