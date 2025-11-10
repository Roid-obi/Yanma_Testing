const SuratTugasDelegasi = require("../src/surattugasdelegasi");
const std = new SuratTugasDelegasi();

describe("Unit Test: Surat Tugas Delegasi", () => {
  test("TC-RZ-15: Surat berhasil dihasilkan", () => {
    const result = std.generateSurat({
      nama: "Riza",
      kegiatan: "Rapat Nasional",
    });
    expect(result.status).toBe("Sukses");
    expect(result.file).toContain("Riza");
  });

  test("Validasi data kosong", () => {
    const result = std.generateSurat({ nama: "", kegiatan: "" });
    expect(result.status).toBe("Gagal");
  });
});
