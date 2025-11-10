const auth = require('./AuthModel');
const dummy = require('./DataDummy');

class SKLModel {

    aksesMenu(username) {
        const user = auth.getUser(username);
        if (!user) return null;
        if (user.role !== "mahasiswa") {
            return {success: false, message: "Tidak memiliki hak akses"};
        }
        return {success: true};
    }

    submitSKL(username, data) {
        const user = auth.getUser(username);
        if (!user.lulus) {
            return {success: false, message: "Belum memenuhi syarat SKL"};
        }

        if (!data.nama || !data.nim) {
            return {success: false, message: "Field wajib harus diisi"};
        }

        return {success: true, status: "Menunggu Verifikasi"};
    }

    adminVerif(id, approve) {
        const item = dummy.FileSKL.find(d => d.id === id);
        if (!item) return null;

        item.status = approve ? "Disetujui" : "Ditolak";
        return item;
    }

    unduh(username) {
        const item = dummy.FileSKL.find(d => d.username === username);
        if (!item || !item.filePath) return null;
        return item.filePath;
    }
}

module.exports = new SKLModel();
