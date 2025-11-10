const Legalisir = require("../src/legalisir");
const lg = new Legalisir();

describe("Unit Test: Legalisir", () => {
  test("TC-AL-19: Nomor antrian muncul otomatis", () => {
    const result = lg.buatAntrian({ nama: "Aldifa", nim: "V3423001" });
    expect(result.status).toBe("Sukses");
    expect(result.nomorAntrian).toBeDefined();
  });

  test("TC-AL-20: Cek status legalisir", () => {
    const result = lg.cekStatus("LG123");
    expect(result.statusLegalisir).toBe("Diproses");
  });

  test("TC-AL-21: Update status legalisir", () => {
    const result = lg.updateStatus("Selesai");
    expect(result.statusLegalisir).toBe("Selesai");
  });

  test("Validasi data kosong", () => {
    const result = lg.buatAntrian({});
    expect(result.status).toBe("Gagal");
  });
});
