# Dokumentasi Unit Testing JavaScript/Node.js dengan Jest

Dokumen ini memandu Anda dalam melakukan Unit Testing untuk kode JavaScript/Node.js dalam proyek ini menggunakan **Jest**, sebuah *framework* pengujian yang menyenangkan.

## 🚀 Quick Setup (Penyiapan Cepat)

Ikuti langkah-langkah di bawah ini di Terminal atau Command Prompt Anda:

1.  **Inisialisasi Proyek Node.js:**
    ```bash
    npm init -y
    ```

2.  **Instalasi Jest:**
    Instal Jest sebagai *dependency* pengembangan (*dev dependency*).
    ```bash
    npm install jest --save-dev
    ```

3.  **Struktur Folder & File:**
    Buat struktur dasar untuk kode sumber (`src`) dan *file* pengujian (`__tests__`).
    ```bash
    mkdir src
    mkdir __tests__
    # Buat file logika (kode yang akan diuji)
    touch src/namaTestCase.js 
    # Buat file pengujian
    touch __tests__/namaTestCase.test.js 
    ```

4.  **Konfigurasi `package.json`:**
    Edit *file* `package.json` Anda dan tambahkan *script* `test` di bagian `"scripts"`:
    ```json
    "scripts": {
        "test": "jest"
    },
    ```

## 🛠️ Cara Menjalankan Pengujian

Untuk menjalankan semua *unit test* yang ada dalam proyek (semua *file* `*.test.js`), ketik perintah ini di Terminal:

```bash
npm run test