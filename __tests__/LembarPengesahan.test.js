const lembar = require('../src/LembarPengesahanModel');

describe("Test Suite: Lembar Pengesahan TA", () => {

    test("TC-FM-01: Akses menu Lembar Pengesahan TA", () => {
        expect(lembar.aksesMenu("mahasiswa").success).toBe(true);
    });

    test("TC-FM-02: Submit dengan field kosong", () => {
        expect(lembar.submitPengajuan("mahasiswa", {nama: "", nim: ""}).success)
            .toBe(false);
    });

    test("TC-FM-03: Submit pengajuan valid", () => {
        expect(lembar.submitPengajuan("mahasiswa", {nama: "Farhan", nim: "123"}))
            .toEqual({success: true, status: "Menunggu Verifikasi"});
    });

    test("TC-FM-04: Akses menu pakai admin ditolak", () => {
        expect(lembar.aksesMenu("admin").success).toBe(false);
    });

    test("TC-FM-05: Admin memverifikasi pengajuan", () => {
        expect(lembar.adminVerif(1).status).toBe("Disetujui");
    });

    test("TC-FM-06: Mahasiswa unduh hasil pengesahan", () => {
        expect(lembar.unduh("mahasiswa2"))
            .toBe("public/pengesahan/pengesahan_mahasiswa.pdf");
    });

});
