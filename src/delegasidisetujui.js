class DelegasiDisetujui {
  checkApproval(data) {
    if (data.statusPersetujuan === "Disetujui") {
      return {
        status: "Sukses",
        message: `Delegasi ${data.namaDelegasi} telah disetujui dan surat tugas diterbitkan`,
      };
    }
    return { status: "Gagal", message: "Delegasi belum disetujui" };
  }
}

module.exports = DelegasiDisetujui;
