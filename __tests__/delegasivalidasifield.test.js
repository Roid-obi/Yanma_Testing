const DelegasiValidasiField = require("../src/delegasivalidasifield");
const dvf = new DelegasiValidasiField();

describe("TC-RZ-14: Validasi field unggahan wajib diisi", () => {
  test("Menolak jika ada field kosong", () => {
    const result = dvf.validate({
      suratPengantar: null,
      proposal: {},
      pamflet: {},
    });
    expect(result.status).toBe("Gagal");
    expect(result.message).toBe("Field wajib diisi");
  });
});
