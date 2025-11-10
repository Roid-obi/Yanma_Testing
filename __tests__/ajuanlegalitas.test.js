const AjuanLegalitas = require("../src/ajuanlegalitas");
const al = new AjuanLegalitas();

describe("Unit Test: Ajuan Legalitas", () => {
  test("TC-AL-01: Tampilan awal", () => {
    const tampilan = al.getTampilanAwal();
    expect(tampilan.judul).toBe("Ajuan Legalitas Kegiatan");
    expect(tampilan.persyaratan).toHaveLength(3);
  });

  test("TC-AL-02: Form pengajuan", () => {
    const form = al.getFormPengajuan();
    expect(form.fields).toHaveLength(3);
  });

  test("TC-AL-03: Validasi file kosong", () => {
    const result = al.validateAjuan({ fileProposal: null });
    expect(result.status).toBe("Gagal");
    expect(result.message).toBe("File proposal wajib diunggah.");
  });

  test("TC-AL-04: Validasi ukuran file", () => {
    const result = al.validateAjuan({
      fileProposal: { size: 11 * 1024 * 1024 },
      namaKegiatan: "Seminar Nasional",
      tanggalPelaksanaan: "2025-12-01",
    });
    expect(result.status).toBe("Gagal");
    expect(result.message).toBe("Ukuran file maksimal 10 MB.");
  });

  test("TC-AL-05: Ajuan sukses", () => {
    const result = al.validateAjuan({
      fileProposal: { size: 5 * 1024 * 1024 },
      namaKegiatan: "Seminar Nasional",
      tanggalPelaksanaan: "2025-12-01",
    });
    expect(result.status).toBe("Sukses");
  });
});
