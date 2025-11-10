const wisuda = require('../src/VerifikasiWisudaModel');

describe("Test Suite: Verifikasi Wisuda", () => {

    test("TC-FM-14: Akses menu Verifikasi Wisuda", () => {
        expect(wisuda.aksesMenu("mahasiswa").success).toBe(true);
    });

    test("TC-FM-15: Upload file SKL valid", () => {
        expect(wisuda.upload("mahasiswa", "file.pdf").status)
            .toBe("Menunggu Verifikasi Admin");
    });

    test("TC-FM-16: Upload file tidak valid", () => {
        expect(wisuda.upload("mahasiswa", "file.jpg").success).toBe(false);
    });

    test("TC-FM-17: Admin menyetujui verifikasi", () => {
        expect(wisuda.adminVerif(1, true).status).toBe("Disetujui");
    });

    test("TC-FM-18: Admin menolak verifikasi", () => {
        expect(wisuda.adminVerif(1, false).status).toBe("Ditolak");
    });

    test("TC-FM-19: Mahasiswa lihat status akhir", () => {
        expect(wisuda.cekStatus("alumni")).toBe("Disetujui");
    });

    test("TC-FM-20: Akses menu oleh non-mahasiswa", () => {
        expect(wisuda.aksesMenu("admin").success).toBe(false);
    });

});
