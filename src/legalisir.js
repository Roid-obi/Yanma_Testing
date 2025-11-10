class Legalisir {
  buatAntrian(data) {
    if (!data.nama || !data.nim) {
      return { status: "Gagal", message: "Data mahasiswa wajib diisi." };
    }
    return { status: "Sukses", nomorAntrian: Math.floor(Math.random() * 1000) };
  }

  cekStatus(kode) {
    if (!kode) {
      return { status: "Gagal", message: "Kode wajib diisi." };
    }
    return { status: "Sukses", statusLegalisir: "Diproses" };
  }

  updateStatus(statusBaru) {
    return { status: "Sukses", statusLegalisir: statusBaru };
  }
}

module.exports = Legalisir;
