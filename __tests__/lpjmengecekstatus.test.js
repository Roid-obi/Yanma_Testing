const LPJMengecekStatus = require("../src/lpjmengecekstatus");
const lms = new LPJMengecekStatus();

describe("TC-AL-20: Mahasiswa dapat mengecek status legalisir", () => {
  test("Status tampil sesuai data", () => {
    const result = lms.getStatus("A123");
    expect(result).toMatch(/Diproses|Selesai|Menunggu/);
  });
});
