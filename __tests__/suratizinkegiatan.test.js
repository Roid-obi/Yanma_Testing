const SuratIzinKegiatan = require("../src/SuratIzinKegiatan");

describe("Surat Izin Kegiatan", () => {
  let izin;

  beforeEach(() => {
    izin = new SuratIzinKegiatan();
  });

  test("menolak ajuan dengan data tidak lengkap", () => {
    expect(() => izin.ajukanIzin({
      namaKegiatan: "",
      tanggalMulai: "2025-11-10",
      tanggalSelesai: "2025-11-12",
      penanggungJawab: "Riza",
      suratPengantar: "izin.pdf"
    })).toThrow("Data ajuan tidak lengkap");
  });

  test("menolak file non-PDF", () => {
    expect(() => izin.ajukanIzin({
      namaKegiatan: "Workshop AI",
      tanggalMulai: "2025-11-10",
      tanggalSelesai: "2025-11-12",
      penanggungJawab: "Riza",
      suratPengantar: "izin.docx"
    })).toThrow("File surat pengantar harus dalam format PDF");
  });

  test("menerima ajuan valid", () => {
    const result = izin.ajukanIzin({
      namaKegiatan: "Workshop AI",
      tanggalMulai: "2025-11-10",
      tanggalSelesai: "2025-11-12",
      penanggungJawab: "Riza",
      suratPengantar: "izin.pdf"
    });
    expect(result.status).toBe("Menunggu");
  });

  test("mengubah status ajuan menjadi Disetujui", () => {
    const ajuan = izin.ajukanIzin({
      namaKegiatan: "Workshop AI",
      tanggalMulai: "2025-11-10",
      tanggalSelesai: "2025-11-12",
      penanggungJawab: "Riza",
      suratPengantar: "izin.pdf"
    });
    const updated = izin.ubahStatus(ajuan.id, "Disetujui");
    expect(updated.status).toBe("Disetujui");
  });
});
