const Legalisir = require("../src/legalisir");

describe("Legalisir Tests (TC-AL-19 sampai TC-AL-22)", () => {
  test("TC-AL-19: Nomor antrian muncul otomatis", () => {
    const legalisir = new Legalisir();
    const result = legalisir.buatAntrian({ nama: "Aldifa", nim: "V3423xxx" });
    expect(result.status).toBe("Sukses");
    expect(result).toHaveProperty("nomorAntrian");
  });

  test("TC-AL-20: Mahasiswa cek status legalisir", () => {
    const legalisir = new Legalisir();
    const result = legalisir.cekStatus("ABC123");
    expect(result.status).toBe("Sukses");
    expect(result.statusLegalisir).toBe("Diproses");
  });

  test("TC-AL-21: Admin update status legalisir", () => {
    const legalisir = new Legalisir();
    const result = legalisir.updateStatus("Selesai");
    expect(result.statusLegalisir).toBe("Selesai");
  });
});
