class SuratTugasDelegasi {
  generateSurat(data) {
    if (!data.nama || !data.kegiatan) {
      return { status: "Gagal", message: "Nama dan kegiatan wajib diisi." };
    }
    return {
      status: "Sukses",
      file: `Surat_Tugas_${data.nama.replace(" ", "_")}.pdf`,
    };
  }
}

module.exports = SuratTugasDelegasi;
