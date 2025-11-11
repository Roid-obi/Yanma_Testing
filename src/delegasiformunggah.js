class DelegasiFormUnggah {
  getFormUnggah() {
    return {
      fields: [
        { name: "suratPengantar", type: "file" },
        { name: "proposal", type: "file" },
        { name: "pamflet", type: "file" },
      ],
    };
  }

  validateUpload(file) {
    if (!file || !file.name) {
      return { status: "Gagal", message: "File tidak ditemukan" };
    }
    const ext = file.name.split(".").pop().toLowerCase();
    if (!["pdf", "zip"].includes(ext)) {
      return { status: "Gagal", message: "Format tidak didukung" };
    }
    return { status: "Sukses" };
  }
}

module.exports = DelegasiFormUnggah;
