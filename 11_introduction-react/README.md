# Materi 11 - Introduction React

## Resume

### React

React adalah library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile.

### Kenapa React

1. Deklaratif

   React membuatnya mudah untuk membuat UI interaktif. Rancang tampilan sederhana untuk setiap status dalam aplikasi Anda, dan React akan secara efisien memperbarui dan merender komponen yang tepat saat data Anda berubah.

   Tampilan deklaratif membuat kode Anda lebih dapat diprediksi dan lebih mudah untuk di-debug.

2. Berbasis Komponen

   Bangun komponen yang dienkapsulasi yang mengelola statusnya sendiri, lalu menyusunnya untuk membuat UI yang kompleks.

   Karena logika komponen ditulis dalam JavaScript alih-alih template, Anda dapat dengan mudah meneruskan data kaya melalui aplikasi Anda dan menjauhkan status dari DOM.

3. Belajar Sekali, Menulis Di Mana Saja

   Kami tidak membuat asumsi tentang sisa tumpukan teknologi Anda, sehingga Anda dapat mengembangkan fitur baru di React tanpa menulis ulang kode yang ada.

   React juga dapat merender di server menggunakan Node dan menjalankan mobile apps menggunakan React Native.

### Virtual DOM

Virtual DOM adalah representasi dari UI berbentuk Javascript Object yang disimpan pada memori.

Masalah yang dihaadapi dengan DOM manipulation:

1. DOM manipulation secara manual dapat membuat code berantakan.
2. Sulit untuk mengingat DOM state sebelumnya.
3. Jauh lebih lambat daripada operasi javascript pada umumnya.

---

## Task

Pada task ini, terdapat resources untuk mengerjakan dua soal yang diberikan.

Berikut adalah resources yang diberikan: [resources](./resources/index.html)

1. Buatlah sebuah project react baru.
2. Buatlah sebuah file baru pada react, yang bernama home.js. Memasukkan halaman home.html ke dalam home.js. Sehingga, ketika kalian membuat react pada home tampilannya akan mirip dengan home.html. (kalian juga perlu untuk memasukkan css dan assets yang kalian pakai).

Jawaban kode: [praktikum](./praktikum/src/components/Home.js)

Ouput:

![Output Kode](./screenshot/output-kode.png)
