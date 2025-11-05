const transkrip = require('../src/TranskripNilai');

describe('Test Suite: Transkrip Nilai Test', () => {
    test('TC-NSK-1: Cek Transkrip Nilai Mahasiswa Belum Lulus', () => {
        expect(transkrip.transkripNilai("mahasiswa")).toEqual({lulus: false, file: false});
    });
    test('TC-NSK-2: Cek Transkrip Nilai Alumni Sudah Lulus', () => {
        expect(transkrip.transkripNilai("alumni")).toEqual({lulus: true, file: true});
    });
})

describe('Test Suite: Unduh Transkrip Nilai Test', () => {
    test('TC-NSK-3: Unduh Transkrip Nilai Alumni File Tidak Ada', () => {
        expect(transkrip.unduhTranskripNilai("alumni2")).toBeNull();
    });
    test('TC-NSK-4: Unduh Transkrip Nilai Alumni Sudah Lulus', () => {
        expect(transkrip.unduhTranskripNilai("alumni")).toBe('public/transkripNilai/transkrip_alumni.pdf');
    });
})