class LPJValidasiStatus {
  validateStatus(status) {
    if (status === "Disetujui") {
      return {
        status: "Sukses",
        message: "Status LPJ berubah menjadi Selesai",
      };
    }
    return { status: "Gagal", message: "Status belum disetujui" };
  }
}

module.exports = LPJValidasiStatus;
