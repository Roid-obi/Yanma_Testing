const LaporanPertanggungjawaban = require("../src/laporanpertanggungjawaban");
const lpj = new LaporanPertanggungjawaban();

describe("Unit Test: LPJ", () => {
  test("Upload tanpa file", () => {
    const result = lpj.uploadFile({});
    expect(result.status).toBe("Gagal");
  });

  test("Upload format salah", () => {
    const result = lpj.uploadFile({ fileLPJ: { type: "jpg" } });
    expect(result.status).toBe("Gagal");
  });

  test("Upload sukses", () => {
    const result = lpj.uploadFile({ fileLPJ: { type: "pdf" } });
    expect(result.status).toBe("Sukses");
  });

  test("Update status jadi selesai", () => {
    const result = lpj.updateStatus("Diterima");
    expect(result.status).toBe("Selesai");
  });
});
