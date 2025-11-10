const auth = require('./AuthModel');
const dummy = require('./DataDummy');

class LembarPengesahanModel {

    aksesMenu(username) {
        const user = auth.getUser(username);
        if (!user) return null;
        if (user.role !== "mahasiswa") {
            return {success: false, message: "Anda tidak memiliki hak akses"};
        }
        return {success: true, message: "Menu Lembar Pengesahan TA ditampilkan"};
    }

    submitPengajuan(username, data) {
        if (!data.nama || !data.nim) {
            return {success: false, message: "Field wajib harus diisi"};
        }
        return {success: true, status: "Menunggu Verifikasi"};
    }

    adminVerif(id) {
        const item = dummy.FilePengesahanTA.find(d => d.id === id);
        if (!item) return null;
        item.status = "Disetujui";
        return item;
    }

    unduh(username) {
        const item = dummy.FilePengesahanTA.find(d => d.username === username);
        if (!item || !item.filePath) return null;
        return item.filePath;
    }
}

module.exports = new LembarPengesahanModel();
