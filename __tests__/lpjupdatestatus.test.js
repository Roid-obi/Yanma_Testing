const LPJUpdateStatus = require('../src/lpjupdatestatus');
const lus = new LPJUpdateStatus();

describe('TC-AL-21: Admin update status legalisir', () => {
    test('Status berubah sesuai input admin', () => {
        const result = lus.setAdminStatus('Diproses');
        expect(result.status).toBe('Diproses');
    });
});
