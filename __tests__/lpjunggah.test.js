const LPJUnggah = require("../src/lpjunggah");
const lpj = new LPJUnggah();

describe("TC-AL-16: Fitur unggah LPJ/SPJ tersedia", () => {
  test("Menampilkan form upload file", () => {
    const form = lpj.getFormUpload();
    expect(form.fields).toContain("fileLPJ");
  });
});
