const express = require("express"); //import express untuk
const path = require("path"); // untuk bisa manggil manggil manggil file dalam directory public, biar seamless cara panggilnya kaya yang di line 11 ``....__dirname,"public")));
const authRoutes = require("./authRoutes"); // Import routes untuk autentikasi

const app = express(); //inisaliasi aplikasi sebagai express biar nnti instancenya si express (objek yang dimuat dari class) bisa di pake sbagai fungsi website.
const port = 5000; //gedefine port biar dalam pemanggilan jangan ngetik port lagi

// Middleware
app.use(express.json());
//👆untuk mem-parsing (memproses) request body yang berformat JSON. Artinya, jika klien (browser atau aplikasi lain) mengirimkan data dalam format JSON melalui HTTP POST, PUT, PATCH, atau DELETE, middleware ini akan mem-parsing data tersebut agar dapat diakses melalui req.body dalam request handler Anda

app.use(express.static(path.join(__dirname, "public")));
// Routes atau endpoint
app.use(authRoutes);

// Halaman Utama
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
