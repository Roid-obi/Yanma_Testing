const SuratIzinKegiatan = require("../src/suratizinkegiatan");

describe("Surat Izin Kegiatan Tests", () => {
  test("Berhasil jika semua field diisi", () => {
    const izin = new SuratIzinKegiatan();
    const result = izin.validateForm({
      namaKegiatan: "Pelatihan Robotik",
      tanggalKegiatan: "2025-11-20",
      fileSurat: { name: "surat.pdf" },
    });
    expect(result.status).toBe("Sukses");
  });

  test("Gagal jika file surat kosong", () => {
    const izin = new SuratIzinKegiatan();
    const result = izin.validateForm({
      namaKegiatan: "Pelatihan Robotik",
      tanggalKegiatan: "2025-11-20",
      fileSurat: null,
    });
    expect(result.status).toBe("Gagal");
  });
});
