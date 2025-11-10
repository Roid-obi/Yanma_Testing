const SuratTugasDelegasi = require("../src/surattugasdelegasi");
const std = new SuratTugasDelegasi();

describe("TC-RZ-15: Surat Tugas Delegasi dihasilkan setelah disetujui", () => {
  test("Berhasil unduh surat tugas setelah disetujui", () => {
    const result = std.generatePDF({ disetujui: true });
    expect(result.status).toBe("Sukses");
    expect(result.fileType).toBe("PDF");
  });
});
