const LPJNomorAntrian = require("../src/lpjnomorantrian");
const lna = new LPJNomorAntrian();

describe("TC-AL-19: Sistem menghasilkan nomor antrian legalisir", () => {
  test("Nomor antrian muncul otomatis", () => {
    const result = lna.generateNomor();
    expect(result).toMatch(/^ANTRIAN-\d{4}$/);
  });
});
