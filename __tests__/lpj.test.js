const LPJUnggah = require("../src/lpjunggah");
const LPJValidasiFormat = require("../src/lpjvalidasiformat");
const LPJValidasiStatus = require("../src/lpjvalidasistatus");
const LPJNomorAntrian = require("../src/lpjnomorantrian");

describe("LPJ Delegasi Tests (TC-AL-16 sampai TC-AL-18)", () => {
  test("TC-AL-16: Fitur unggah LPJ tersedia", () => {
    const lpj = new LPJUnggah();
    const result = lpj.uploadLPJ({ name: "laporan.pdf", size: 300000 });
    expect(result.status).toBe("Sukses");
  });

  test("TC-AL-17: Validasi format file PDF/ZIP", () => {
    const validator = new LPJValidasiFormat();
    const result = validator.validateFormat({
      name: "dokumen.txt",
      size: 200000,
    });
    expect(result.status).toBe("Gagal");
  });

  test("TC-AL-18: Status pengajuan berubah menjadi Selesai", () => {
    const validator = new LPJValidasiStatus();
    const result = validator.validateStatus("Disetujui");
    expect(result.status).toBe("Sukses");
  });

  test("Generate nomor antrian LPJ", () => {
    const queue = new LPJNomorAntrian();
    const result = queue.generateQueue([1, 2, 3]);
    expect(result.status).toBe("Sukses");
    expect(result.message).toMatch(/Nomor antrian/);
  });
});
