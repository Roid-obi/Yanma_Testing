const SuratIzinKegiatan = require("../src/suratizinkegiatan");
const sik = new SuratIzinKegiatan();

describe("Unit Test: Surat Izin Kegiatan", () => {
  test("Form kosong", () => {
    const result = sik.validateForm({});
    expect(result.status).toBe("Gagal");
  });

  test("File belum diunggah", () => {
    const result = sik.validateForm({
      namaKegiatan: "Workshop",
      tanggalKegiatan: "2025-12-01",
    });
    expect(result.status).toBe("Gagal");
  });

  test("Form valid", () => {
    const result = sik.validateForm({
      namaKegiatan: "Workshop",
      tanggalKegiatan: "2025-12-01",
      fileSurat: { size: 1024 },
    });
    expect(result.status).toBe("Sukses");
  });
});
