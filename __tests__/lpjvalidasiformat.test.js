const LPJValidasiFormat = require("../src/lpjvalidasiformat");
const lvf = new LPJValidasiFormat();

describe("TC-AL-17: Validasi format file PDF/ZIP", () => {
  test("Menolak file selain PDF atau ZIP", () => {
    const result = lvf.validateFile({ name: "laporan.docx" });
    expect(result.status).toBe("Gagal");
    expect(result.message).toBe("Format file harus PDF atau ZIP");
  });
});
