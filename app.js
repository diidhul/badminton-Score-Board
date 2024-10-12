const express = require("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
// const cors = require("cors");
const path = require("path");

const app = express();
const port = 5000;

// Middleware
// app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); //untuk bisa nampilin css yang ada di flder public

// Koneksi ke database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_management",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Secret Key untuk JWT
const JWT_SECRET = "your_jwt_secret_key";

//endpoint halaman utama
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile(__dirname + "/views/login.html");
});

// Register Endpoint
app.post("/register", async (req, res) => {
  const { email, username, password } = req.body;

  // Validasi input kosong
  if (!email || !username || !password) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  // Cek apakah user sudah ada
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (result.length > 0) {
        return res.status(400).json({ message: "Email sudah digunakan" });
      }

      // Simpan user baru ke database
      db.query(
        "INSERT INTO users (email, username, password) VALUES (?, ?, ?)",
        [email, username, password],
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: "Database error" });
          }
          res.status(201).json({ message: "Registrasi berhasil" });
        }
      );
    }
  );
});

// Login Endpoint

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Login Endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Cek apakah user ada
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (result.length === 0) {
        return res.status(400).json({ message: "User tidak ditemukan" });
      }

      const user = result[0];

      // Cek password
      const isPasswordValid = password === user.password; // Buang bcrypt untuk sekarang karena dihapus
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Password salah" });
      }

      // Buat token JWT
      const token = jwt.sign(
        { userId: user.id, username: user.username },
        JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      // Simpan token di sisi klien (front-end perlu mengambil token dan menyimpannya)
      res.json({ message: "Login berhasil", token, redirect: "/index" });
    }
  );
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
