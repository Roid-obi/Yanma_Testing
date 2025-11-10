class LPJMengecekStatus {
  getStatus(kode) {
    const statusList = ["Diproses", "Selesai", "Menunggu"];
    return statusList[Math.floor(Math.random() * statusList.length)];
  }
}

module.exports = LPJMengecekStatus;
