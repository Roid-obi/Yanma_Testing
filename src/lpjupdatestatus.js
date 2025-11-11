class LPJUpdateStatus {
  updateStatus(data) {
    if (data.uploaded) return { status: "Selesai" };
    return { status: "Menunggu" };
  }

  setAdminStatus(statusBaru) {
    return { status: statusBaru };
  }
}

module.exports = LPJUpdateStatus;
