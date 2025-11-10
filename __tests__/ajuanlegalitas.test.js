const AjuanLegalitas = require("../src/ajuanlegalitas");

describe("Ajuan Legalitas Tests", () => {
  test("Validasi data legalitas lengkap", () => {
    const legalitas = new AjuanLegalitas();
    const result = legalitas.validateAjuan({
      namaKegiatan: "Workshop TI",
      tanggalPelaksanaan: "2025-12-10",
      fileProposal: { name: "proposal.pdf", size: 200000 },
    });
    expect(result.status).toBe("Sukses");
  });

  test("Gagal jika file proposal kosong", () => {
    const legalitas = new AjuanLegalitas();
    const result = legalitas.validateAjuan({
      namaKegiatan: "Workshop TI",
      tanggalPelaksanaan: "2025-12-10",
      fileProposal: null,
    });
    expect(result.status).toBe("Gagal");
  });
});
