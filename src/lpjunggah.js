class LPJUnggah {
  getFormUpload() {
    return {
      fields: ["fileLPJ"],
      info: "Unggah file LPJ atau SPJ dalam format PDF/ZIP",
    };
  }

  uploadLPJ(file) {
    if (!file || !file.name) {
      return { status: "Gagal", message: "File tidak ditemukan" };
    }

    const ext = file.name.split(".").pop().toLowerCase();
    if (!["pdf", "zip"].includes(ext)) {
      return { status: "Gagal", message: "Format tidak didukung" };
    }

    return { status: "Sukses", message: "File berhasil diunggah" };
  }
}

module.exports = LPJUnggah;
