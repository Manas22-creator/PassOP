// server.js
const express = require("express");
const dotenv = require("dotenv");
const { MongoClient, ServerApiVersion } = require("mongodb");
const bodyparser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(bodyparser.json());
app.use(cors());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tls: true,
  tlsAllowInvalidCertificates: false,
});

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
}

connectDB();

// Database name from .env
const dbName = process.env.DB_NAME || "passop";

// Routes
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const result = await collection.find({}).toArray();
  res.json(result);
});

app.post("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const result = await collection.insertOne(req.body);
  res.json({ success: true, result });
});

app.delete("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const result = await collection.deleteOne({ id: req.body.id });
  res.json({ success: true, result });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
