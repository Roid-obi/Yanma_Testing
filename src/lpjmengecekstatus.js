class LPJMengecekStatus {
  /**
   * Mengecek status LPJ yang telah diajukan.
   * @param {Object} data - Data LPJ.
   * @returns {Object} Status LPJ.
   */
  checkStatus(data) {
    if (!data.nomorLPJ || !data.status) {
      return { status: "Gagal", message: "Data LPJ tidak lengkap." };
    }

    switch (data.status) {
      case "Disetujui":
        return { status: "Sukses", message: "LPJ telah disetujui." };
      case "Menunggu":
        return {
          status: "Menunggu",
          message: "LPJ masih dalam proses verifikasi.",
        };
      case "Ditolak":
        return { status: "Gagal", message: "LPJ ditolak, perlu revisi." };
      default:
        return { status: "Gagal", message: "Status LPJ tidak valid." };
    }
  }
}

module.exports = LPJMengecekStatus;
