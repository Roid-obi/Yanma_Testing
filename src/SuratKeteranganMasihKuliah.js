const authModel = require('./authModel')
const dataDummy = require('./DataDummy');

class SuratKeteranganMasihKuliah {
    ajukanMasihKuliah(tahun_akademik, semester, nama_orang_tua) {
        let data = []

        if (tahun_akademik && semester && nama_orang_tua) {
            data.push({tahun_akademik, semester, nama_orang_tua})
            return { success: true, message: "Pengajuan Surat Keterangan Masih Kuliah Berhasil" }
        } else {
            return { success: false, message: "Pengajuan Surat Keterangan Masih Kuliah Gagal" }
        }
    }

    unduhSuratKeteranganMasihKuliah(username) {
        const user = authModel.getUser(username);
        // if (!user) return null;

        const fileEntry = dataDummy.FileSuratKeteranganMasihKuliah.find(entry => entry.username === username);
        if (fileEntry && fileEntry.filePath) {
            return fileEntry.filePath;
        } else {
            return null;
        }
    }
}

module.exports = new SuratKeteranganMasihKuliah();