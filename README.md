# Dokumentasi Unit Testing JavaScript/Node.js dengan Jest

<div align="center">
  <img height="200" src="https://icon.icepanel.io/Technology/svg/Jest.svg" />
</div>

Dokumen ini memandu Anda dalam melakukan Unit Testing untuk kode JavaScript/Node.js dalam proyek ini menggunakan **Jest**, sebuah *framework* pengujian yang menyenangkan.

## 🤝 Kolaborasi (Collaboration)

Untuk bekerja secara kolaboratif dalam proyek ini, khususnya saat menambahkan atau memodifikasi *unit test*, Anda harus mengikuti alur kerja Git standar.

### 1\. **Clone Repositori**

Jika Anda belum memiliki salinan lokal proyek, *clone* repositori dari Git (misalnya, GitHub, GitLab, atau Bitbucket):

```bash
# Ganti <URL-Repositori> dengan URL sebenarnya
git clone <URL-Repositori> 
cd <nama-folder-proyek>
```

### 2\. **Buat Branch Baru untuk Testing**

Sebelum memulai pekerjaan, **selalu** buat *branch* baru. Ini memastikan perubahan Anda terisolasi dan tidak merusak *branch* utama (`main` atau `master`). Untuk *unit testing*, ikuti konvensi penamaan `test/[nama-anda]`.

```bash
# Ganti [nama-anda] dengan nama Anda (misalnya, 'test/budi' atau 'test/farah')
git checkout -b test/[nama-anda] 
```

*Perintah ini secara otomatis akan memindahkan Anda ke branch baru yang telah dibuat.*

### 3\. **Instalasi Dependensi**

Pastikan semua *dependency* (termasuk Jest) terinstal di lingkungan lokal Anda:

```bash
npm install
```

*Langkah ini harus dilakukan setelah cloning atau jika ada perubahan pada `package.json`.*

-----

## 🚀 Quick Setup (Penyiapan Cepat)

Ikuti langkah-langkah di bawah ini di Terminal atau Command Prompt Anda **setelah Anda berada di *branch* baru**:

1.  **Inisialisasi Proyek Node.js:**

    ```bash
    npm init -y
    ```

    *(Hanya jika belum diinisialisasi)*

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

-----

## 🛠️ Cara Menjalankan Pengujian

Untuk menjalankan semua *unit test* yang ada dalam proyek (semua *file* `*.test.js`), ketik perintah ini di Terminal:

```bash
npm run test
```

-----

## 📤 Menyelesaikan Pekerjaan dan Mengirim Perubahan

Setelah Anda selesai menulis *unit test* dan memastikan semuanya lulus (`npm run test` berhasil):

1.  **Stage (Tambahkan) Perubahan:**

    ```bash
    git add .
    ```

2.  **Commit Perubahan:**
    Tulis pesan *commit* yang deskriptif.

    ```bash
    git commit -m "feat(testing): tambahkan unit test untuk [nama-fitur]"
    ```

3.  **Push Branch ke Repositori Jarak Jauh (Remote):**

    ```bash
    git push origin test/[nama-anda]
    ```

4.  **Buat Pull Request (PR):**
    Akses platform Git (misalnya, GitHub) dan buat *Pull Request* dari *branch* `test/[nama-anda]` Anda ke *branch* utama (`main`/`master`) agar *unit test* Anda dapat ditinjau dan digabungkan.