const skl = require('../src/SKLModel');

describe("Test Suite: SKL", () => {

    test("TC-FM-07: Akses menu SKL", () => {
        expect(skl.aksesMenu("mahasiswa").success).toBe(true);
    });

    test("TC-FM-08: Submit SKL tanpa field wajib", () => {
        expect(skl.submitSKL("alumni", {nama:"", nim:""}).success)
            .toBe(false);
    });

    test("TC-FM-09: Submit SKL dengan data lengkap", () => {
        expect(skl.submitSKL("alumni", {nama:"Farhan", nim:"123"}))
            .toEqual({success:true, status:"Menunggu Verifikasi"});
    });

    test("TC-FM-10: Admin verifikasi SKL", () => {
        expect(skl.adminVerif(1, true).status).toBe("Disetujui");
    });

    test("TC-FM-11: Admin menolak SKL", () => {
        expect(skl.adminVerif(1, false).status).toBe("Ditolak");
    });

    test("TC-FM-12: Mahasiswa unduh SKL", () => {
        expect(skl.unduh("alumni")).toBe("public/skl/skl_alumni.pdf");
    });

    test("TC-FM-13: Mahasiswa belum memenuhi syarat mengajukan SKL", () => {
        expect(skl.submitSKL("mahasiswa", {nama:"Farhan", nim:"123"}).success)
            .toBe(false);
    });

});
