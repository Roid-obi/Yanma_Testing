const auth = require('./AuthModel');
const dummy = require('./DataDummy');

class VerifikasiWisudaModel {

    aksesMenu(username) {
        const user = auth.getUser(username);
        if (user.role !== "mahasiswa") {
            return {success: false, message: "Tidak memiliki hak akses"};
        }
        return {success: true};
    }

    upload(username, file) {
        if (!file.endsWith(".pdf")) {
            return {success: false, message: "Format file tidak valid"};
        }
        return {
            success: true,
            status: "Menunggu Verifikasi Admin"
        };
    }

    adminVerif(id, approve) {
        const item = dummy.FileVerifikasiWisuda.find(d => d.id === id);
        if (!item) return null;

        item.status = approve ? "Disetujui" : "Ditolak";
        return item;
    }

    cekStatus(username) {
        const item = dummy.FileVerifikasiWisuda.find(d => d.username === username);
        if (!item) return null;
        return item.status;
    }
}

module.exports = new VerifikasiWisudaModel();
