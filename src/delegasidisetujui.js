class DelegasiDisetujui {
  /**
   * Mengecek apakah delegasi telah disetujui oleh pihak berwenang.
   * @param {Object} data - Data delegasi.
   * @returns {Object} Status persetujuan delegasi.
   */
  checkApproval(data) {
    if (!data.namaDelegasi || !data.statusPersetujuan) {
      return { status: "Gagal", message: "Data delegasi tidak lengkap." };
    }

    if (data.statusPersetujuan === "Disetujui") {
      return {
        status: "Sukses",
        message: `Delegasi ${data.namaDelegasi} telah disetujui.`,
      };
    }

    return {
      status: "Menunggu",
      message: "Delegasi masih dalam proses persetujuan.",
    };
  }
}

module.exports = DelegasiDisetujui;
