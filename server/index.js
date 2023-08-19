const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
app.use(express.json());
const { Schema, model } = mongoose;

const MONGO_URL =
  "mongodb+srv://anirbandutta428:sonai1999@cluster0.nv0bjna.mongodb.net/";

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MONGODB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

// Define User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.json({ error: "Please fill all the fields properly" });
  } else {
    try {
      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ error: "Email already exists" });
      }

      // Hash the password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // If credentials are valid, create and return a JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h", // Token expiration time
    });

    res.status(200).json({
      token,
      user: {
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/getAllUsers", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/getAllUsers/:id", async (req, res) => {
  const searchid = req.params.id;
  const users = await User.findById(searchid);
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("Hello from 75 hard day tracker!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
