class DelegasiValidasiField {
  /**
   * Memvalidasi kelengkapan data form delegasi.
   * @param {Object} data - Data form delegasi.
   * @returns {Object} Hasil validasi.
   */
  validateFields(data) {
    const requiredFields = ["nama", "nim", "prodi", "alasan"];
    const missing = requiredFields.filter(
      (f) => !data[f] || data[f].trim() === ""
    );

    if (missing.length > 0) {
      return {
        status: "Gagal",
        message: `Field wajib diisi: ${missing.join(", ")}`,
      };
    }

    return { status: "Sukses", message: "Seluruh field valid." };
  }
}

module.exports = DelegasiValidasiField;
