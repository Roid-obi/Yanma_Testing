const Legalisir = require("../src/Legalisir");

describe("Legalisir Dokumen Akademik", () => {
  let legalisir;

  beforeEach(() => {
    legalisir = new Legalisir();
  });

  test("menolak ajuan tanpa data lengkap", () => {
    expect(() => legalisir.ajukanLegalisir({
      nama: "Riza",
      npm: "",
      dokumen: "transkrip.pdf",
      jumlahCopy: 2
    })).toThrow("Data tidak lengkap");
  });

  test("menolak dokumen non-PDF", () => {
    expect(() => legalisir.ajukanLegalisir({
      nama: "Riza",
      npm: "V3924001",
      dokumen: "transkrip.jpg",
      jumlahCopy: 1
    })).toThrow("Dokumen harus PDF");
  });

  test("menolak jumlah copy nol", () => {
    expect(() => legalisir.ajukanLegalisir({
      nama: "Riza",
      npm: "V3924001",
      dokumen: "transkrip.pdf",
      jumlahCopy: 0
    })).toThrow("Jumlah copy harus lebih dari 0");
  });

  test("menerima ajuan valid", () => {
    const result = legalisir.ajukanLegalisir({
      nama: "Riza",
      npm: "V3924001",
      dokumen: "transkrip.pdf",
      jumlahCopy: 3
    });
    expect(result.status).toBe("Menunggu");
  });

  test("mengubah status menjadi Diproses", () => {
    const ajuan = legalisir.ajukanLegalisir({
      nama: "Riza",
      npm: "V3924001",
      dokumen: "transkrip.pdf",
      jumlahCopy: 2
    });
    const updated = legalisir.ubahStatus(ajuan.id, "Diproses");
    expect(updated.status).toBe("Diproses");
  });
});
