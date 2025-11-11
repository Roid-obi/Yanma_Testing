class SuratTugasDelegasi {
  generatePDF(data) {
    if (!data.disetujui) {
      return { status: "Gagal", message: "Belum disetujui" };
    }
    const fileName = `Surat_Tugas_Riza_${Date.now()}.pdf`;
    return {
      status: "Sukses",
      fileType: "PDF",
      file: fileName,
    };
  }

  generateSurat(data) {
    if (!data.nama || !data.kegiatan) {
      return { status: "Gagal", message: "Data tidak lengkap" };
    }
    return {
      status: "Sukses",
      fileType: "PDF",
      file: `Surat_Tugas_${data.nama}.pdf`,
    };
  }
}

module.exports = SuratTugasDelegasi;
