# Toko Makanan API

Proyek ini adalah sebuah RESTful API untuk mengelola data makanan di sebuah toko makanan. API ini memungkinkan Anda untuk melakukan operasi CRUD pada data makanan.

## Memulai

Untuk memulai dengan proyek ini, ikuti langkah-langkah berikut:

1. Clone repositori: `git clone https://github.com/aaronfebrian/toko-makanan-rest-api.git`
2. Install dependensi: `npm install`
3. Jalankan server: `node server.js`

Server akan mulai berjalan di `http://localhost:3000`.

## Endpoint API

Berikut adalah daftar endpoint yang tersedia:

- `GET /makanan`: Dapatkan semua data makanan
- `GET /makanan/:id`: Dapatkan data makanan berdasarkan ID tertentu
- `POST /makanan`: Tambahkan data makanan baru
- `PUT /makanan/update/:id`: Perbarui data makanan berdasarkan ID tertentu
- `DELETE /makanan/delete/:id`: Hapus data makanan berdasarkan ID tertentu

## Mengirim Permintaan

Untuk mengirim permintaan ke API, Anda dapat menggunakan alat seperti cURL atau Postman.

## Melihat Dokumentasi API

Anda juga dapat melihat Dokumentasi API dengan mengunjungi `http://localhost:3000/api-docs`.

![Contoh Dokumentasi API](<Screenshot 2024-04-25 115306.png>)
