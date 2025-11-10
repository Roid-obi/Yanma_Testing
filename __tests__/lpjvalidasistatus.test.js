const LPJUpdateStatus = require("../src/lpjupdatestatus");
const lus = new LPJUpdateStatus();

describe("TC-AL-18: Status pengajuan berubah menjadi 'Selesai'", () => {
  test("Status berubah otomatis setelah upload LPJ", () => {
    const result = lus.updateStatus({ uploaded: true });
    expect(result.status).toBe("Selesai");
  });
});
