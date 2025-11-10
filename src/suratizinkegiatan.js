class SuratIzinKegiatan {
  validateForm(data) {
    if (!data.namaKegiatan || !data.tanggalKegiatan) {
      return { status: "Gagal", message: "Nama dan tanggal wajib diisi." };
    }
    if (!data.fileSurat) {
      return { status: "Gagal", message: "File surat wajib diunggah." };
    }
    return {
      status: "Sukses",
      message: "Surat izin kegiatan berhasil diajukan.",
    };
  }
}

module.exports = SuratIzinKegiatan;
