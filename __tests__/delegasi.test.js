const DelegasiFormUnggah = require("../src/delegasiformunggah");
const DelegasiValidasiField = require("../src/delegasivalidasifield");
const DelegasiDisetujui = require("../src/delegasidisetujui");

describe("Delegasi Tests (TC-RZ-13 sampai TC-RZ-15)", () => {
  test("TC-RZ-13: Form unggah 3 dokumen tersedia", () => {
    const form = new DelegasiFormUnggah();
    const file = { name: "proposal.pdf", size: 500000 };
    const result = form.validateUpload(file);
    expect(result.status).toBe("Sukses");
  });

  test("TC-RZ-14: Validasi field wajib diisi", () => {
    const validator = new DelegasiValidasiField();
    const dataKosong = {
      nama: "Abi",
      nim: "V3423xxx",
      prodi: "TI",
      alasan: "",
    };
    const result = validator.validateFields(dataKosong);
    expect(result.status).toBe("Gagal");
    expect(result.message).toMatch(/Field wajib diisi/);
  });

  test("TC-RZ-15: Surat tugas delegasi dihasilkan setelah disetujui", () => {
    const approval = new DelegasiDisetujui();
    const result = approval.checkApproval({
      namaDelegasi: "Muhammad Abimanyu Riza",
      statusPersetujuan: "Disetujui",
    });
    expect(result.status).toBe("Sukses");
    expect(result.message).toMatch(/telah disetujui/);
  });
});
