class AjuanLegalitas {
  getTampilanAwal() {
    return {
      judul: "Ajuan Legalitas Kegiatan",
      persyaratan: ["Proposal", "Surat Pengantar", "Daftar Panitia"],
      showForm: true,
    };
  }

  getFormPengajuan() {
    return {
      fields: [
        { name: "namaKegiatan", required: true },
        { name: "tanggalPelaksanaan", required: true },
        { name: "fileProposal", type: "file", required: true, maxSize: "10MB" },
      ],
    };
  }

  validateAjuan(data) {
    if (!data.fileProposal) {
      return { status: "Gagal", message: "File proposal wajib diunggah." };
    }
    if (data.fileProposal.size > 10 * 1024 * 1024) {
      return { status: "Gagal", message: "Ukuran file maksimal 10 MB." };
    }
    if (!data.namaKegiatan || !data.tanggalPelaksanaan) {
      return { status: "Gagal", message: "Data kegiatan wajib diisi." };
    }
    return { status: "Sukses", message: "Ajuan legalitas berhasil dikirim." };
  }
}

module.exports = AjuanLegalitas;
