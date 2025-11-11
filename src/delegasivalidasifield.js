class DelegasiValidasiField {
  validate(data) {
    if (!data.suratPengantar || !data.proposal || !data.pamflet) {
      return { status: "Gagal", message: "Field wajib diisi" };
    }
    return { status: "Sukses" };
  }

  validateFields(data) {
    const required = ["nama", "nim", "prodi", "alasan"];
    for (const field of required) {
      if (!data[field]) {
        return { status: "Gagal", message: "Field wajib diisi" };
      }
    }
    return { status: "Sukses" };
  }
}

module.exports = DelegasiValidasiField;
