class LPJNomorAntrian {
  generateQueue(queueList) {
    const nextNumber = queueList.length + 1;
    return {
      status: "Sukses",
      message: `Nomor antrian ${nextNumber} berhasil dibuat`,
    };
  }

  generateNomor() {
    const num = Math.floor(1000 + Math.random() * 9000);
    return `ANTRIAN-${num}`;
  }
}

module.exports = LPJNomorAntrian;
