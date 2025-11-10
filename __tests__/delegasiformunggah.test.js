const DelegasiFormUnggah = require("../src/delegasiformunggah");
const dfu = new DelegasiFormUnggah();

describe("TC-RZ-13: Form unggah 3 dokumen tersedia", () => {
  test("Form tampil dengan field lengkap", () => {
    const form = dfu.getFormUnggah();
    expect(form.fields).toHaveLength(3);
    expect(form.fields.map((f) => f.name)).toEqual([
      "suratPengantar",
      "proposal",
      "pamflet",
    ]);
  });
});
