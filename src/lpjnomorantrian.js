class LPJNomorAntrian {
  /**
   * Menghasilkan nomor antrian untuk proses LPJ.
   * @param {Array} daftar - Daftar LPJ yang sudah ada.
   * @returns {Object} Nomor antrian baru.
   */
  generateQueue(daftar) {
    const nomor = daftar.length + 1;
    return { status: "Sukses", message: `Nomor antrian Anda: ${nomor}` };
  }
}

module.exports = LPJNomorAntrian;
