const fs = require("fs");

fs.readFile("dosya.txt", "utf8", function (hata, data) {
  if (hata) {
    throw hata;
  }
  console.log(data);
});

// fs.writeFile("dosya2.txt", "Derin Demirog", function (hata) {
//   if (hata) {
//     throw hata;
//   }
//   console.log("Yazildi");
// });

// fs.appendFile("dosya2.txt", "Engin Demirog", function (hata) {
//   if (hata) {
//     throw hata;
//   }
//   console.log("Eklendi");
// });

fs.unlink("dosya2.txt", function (hata) {
  if (hata) {
    throw hata;
  }
  console.log("Silindi");
});
