class LaporanPertanggungjawaban {
  uploadFile(data) {
    if (!data.fileLPJ) {
      return { status: "Gagal", message: "File LPJ wajib diunggah." };
    }
    if (!["pdf", "zip"].includes(data.fileLPJ.type)) {
      return { status: "Gagal", message: "Format file harus PDF atau ZIP." };
    }
    return { status: "Sukses", message: "LPJ berhasil diunggah." };
  }

  updateStatus(status) {
    return status === "Diterima"
      ? { status: "Selesai", message: "Proses LPJ selesai." }
      : { status: "Proses", message: "Masih dalam proses." };
  }
}

module.exports = LaporanPertanggungjawaban;
