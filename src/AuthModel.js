let validUser = [
    {
        username: "mahasiswa",
        password: "mahasiswa123",
        role: "mahasiswa",
        lulus: false
    },
    {
        username: "alumni",
        password: "alumni123",
        role: "mahasiswa",
        lulus: true
    },
    {
        username: "alumni2",
        password: "alumni123",
        role: "mahasiswa",
        lulus: true
    },
    {
        username: "admin",
        password: "admin123",
        role: "admin"
    }
]

class AuthModel {
    login(username, password) {
        if (!username || !password) {
            return {success: false, message: "username atau password tidak boleh kosong"}
        }

        const userMatch = validUser.find(user => user.username === username && user.password === password);

        if (userMatch) {
            return {success: true, message: "berhasil login"};
        } else {
            return {success: false, message: "username atau password salah"};
        }
    }

    getUser(username) {
        const user = validUser.find(user => user.username === username);
        if (user) {
            return {username: user.username, role: user.role, lulus: user.lulus};
        } else {
            return null;
        }
    }
}

module.exports = new AuthModel();