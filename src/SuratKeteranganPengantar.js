const authModel = require('./AuthModel');
const dataDummy = require('./DataDummy');

class SuratKeteranganPengantar {
    ajukanPengantar(tahun_akademik, semester, keperluan) {
        let data = [];

        if (tahun_akademik && semester && keperluan) {
            data.push({ tahun_akademik, semester, keperluan });
            return { success: true, message: "Pengajuan Surat Keterangan Pengantar Berhasil" };
        } else {
            return { success: false, message: "Pengajuan Surat Keterangan Pengantar Gagal" };
        }
    }

    unduhSuratKeteranganPengantar(username) {
        const user = authModel.getUser(username);
        // if (!user) return null;

        const fileEntry = dataDummy.FileSuratKeteranganPengantar.find(entry => entry.username === username);
        if (fileEntry && fileEntry.filePath) {
            return fileEntry.filePath;
        } else {
            return null;
        }
    }
}

module.exports = new SuratKeteranganPengantar();