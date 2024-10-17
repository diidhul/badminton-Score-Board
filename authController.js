const db = require("./connection");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret_key";

exports.register = (req, res) => {
  const { email, username, password } = req.body;

  //validasi email udah di gunakan atau belum
  try {
    if (!email || !username || !password) {
      return res.status(400).json({ message: "Semua field harus diisi" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
      if (err) throw err;
      //
      if (result.length > 0) {
        return res.status(400).json({ message: "Email sudah digunakan" });
      }

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
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  try {
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        return res.status(400).json({ message: "User tidak ditemukan" });
      }

      const user = result[0];

      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Password salah" });
      }

      const token = jwt.sign(
        { userId: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.json({ message: "Login berhasil", token, redirect: "/index" });
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
