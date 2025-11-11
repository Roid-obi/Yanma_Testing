class LPJValidasiFormat {
  validateFile(file) {
    const ext = file.name.split(".").pop().toLowerCase();
    if (!["pdf", "zip"].includes(ext)) {
      return { status: "Gagal", message: "Format file harus PDF atau ZIP" };
    }
    return { status: "Sukses" };
  }

  validateFormat(file) {
    return this.validateFile(file);
  }
}

module.exports = LPJValidasiFormat;
