// Dapatkan referensi ke tombol-tombol dengan id masing-masing
const tombol1 = document.getElementById("index1.html");
const tombol2 = document.getElementById("index2.html");
const tombol3 = document.getElementById("index3.html");

// Tambahkan event listener untuk tombol pertama
tombol1.addEventListener("click", function() {
  // Arahkan ke file lain yang ingin Anda tuju
  window.location.href = "index1.html";
});

// Tambahkan event listener untuk tombol kedua
tombol2.addEventListener("click", function() {
  // Arahkan ke file lain yang ingin Anda tuju
  window.location.href = "index2.html";
});

// Tambahkan event listener untuk tombol kedua
tombol3.addEventListener("click", function() {
  // Arahkan ke file lain yang ingin Anda tuju
  window.location.href = "index3.html";
});
