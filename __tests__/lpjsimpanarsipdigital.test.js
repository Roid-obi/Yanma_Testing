const LPJSimpanArsipDigital = require("../src/lpjsimpanarsipdigital");
const lsa = new LPJSimpanArsipDigital();

describe("TC-AL-22: Sistem menyimpan arsip digital hasil scan", () => {
  test("File tersimpan di arsip digital", () => {
    const result = lsa.saveFile({ name: "hasil_scan.pdf" });
    expect(result.saved).toBe(true);
    expect(result.path).toContain("arsip");
  });
});
