class LPJValidasiStatus {
  /**
   * Memastikan status LPJ valid sebelum diperbarui.
   * @param {string} status - Status baru yang akan diberikan.
   * @returns {Object} Hasil validasi status.
   */
  validateStatus(status) {
    const validStatuses = ["Menunggu", "Disetujui", "Ditolak", "Revisi"];
    if (!validStatuses.includes(status)) {
      return { status: "Gagal", message: "Status tidak valid." };
    }

    return {
      status: "Sukses",
      message: `Status ${status} diterima sebagai status valid.`,
    };
  }
}

module.exports = LPJValidasiStatus;
