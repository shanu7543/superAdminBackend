import mongoose, { ConnectOptions } from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user";
import cors from "cors";
import organizationRoute from "./routes/handleOrganization";
import vidyChatRoute from "./routes/handleVidyChat";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());



// MongoDB connection
const mongoUrl =
  "mongodb+srv://amitsarraf:S%40m12345@flat-service.qartbfp.mongodb.net/vidychat?authSource=admin&replicaSet=atlas-73o9j1-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true";

  mongoose.connect(mongoUrl as string);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection failed'));
  db.once('open', async () => {
    console.log('Database conencted successfully!');
  });

// Routes
app.use("/auth", userRoutes);
app.use("/auth", organizationRoute);
app.use("/auth", vidyChatRoute);


// Start the server
const port = process.env.PORT || 4200;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
