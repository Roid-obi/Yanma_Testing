const authModel = require('./AuthModel');
const dataDummy = require('./DataDummy');

class SuratIzinKegiatan {
    validateForm(data) {
        if (!data.namaKegiatan || !data.tanggalKegiatan || !data.fileSurat) {
            return {
                status: "Gagal",
                message: "Semua field harus diisi"
            };
        }

        return {
            status: "Sukses",
            message: "Form valid"
        };
    }

    ajukanSuratIzin(namaKegiatan, tanggalKegiatan, fileSurat, username) {
        const user = authModel.getUser(username);
        if (!user) {
            return {
                success: false,
                message: "User tidak ditemukan"
            };
        }

        const validation = this.validateForm({
            namaKegiatan,
            tanggalKegiatan,
            fileSurat
        });

        if (validation.status === "Sukses") {
            return {
                success: true,
                message: "Pengajuan Surat Izin Kegiatan Berhasil"
            };
        } else {
            return {
                success: false,
                message: validation.message
            };
        }
    }

    unduhSuratIzinKegiatan(username) {
        const user = authModel.getUser(username);
        if (!user) return null;

        const fileEntry = dataDummy.FileSuratIzinKegiatan?.find(entry => entry.username === username);
        if (fileEntry && fileEntry.filePath) {
            return fileEntry.filePath;
        } else {
            return null;
        }
    }
}

module.exports = SuratIzinKegiatan;
