class DelegasiFormUnggah {
  /**
   * Melakukan validasi sebelum file delegasi diunggah.
   * @param {Object} file - Objek file yang akan diunggah.
   * @returns {Object} Status validasi.
   */
  validateUpload(file) {
    if (!file || !file.name) {
      return {
        status: "Gagal",
        message: "File wajib dipilih sebelum diunggah.",
      };
    }

    const allowedExtensions = ["pdf", "jpg", "png"];
    const ext = file.name.split(".").pop().toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      return { status: "Gagal", message: "Format file tidak didukung." };
    }

    if (file.size > 2 * 1024 * 1024) {
      // Maks 2MB
      return { status: "Gagal", message: "Ukuran file melebihi 2MB." };
    }

    return { status: "Sukses", message: "File siap diunggah." };
  }
}

module.exports = DelegasiFormUnggah;
