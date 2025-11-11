class Legalisir {
  buatAntrian(data) {
    if (!data.nama || !data.nim) {
      return { status: "Gagal", message: "Data tidak lengkap" };
    }
    const nomor = Math.floor(Math.random() * 1000);
    return {
      status: "Sukses",
      nomorAntrian: `LGL-${nomor}`,
      nama: data.nama,
    };
  }

  cekStatus(kode) {
    if (!kode) return { status: "Gagal" };
    return {
      status: "Sukses",
      statusLegalisir: "Diproses",
    };
  }

  updateStatus(statusBaru) {
    return { statusLegalisir: statusBaru };
  }
}

module.exports = Legalisir;
