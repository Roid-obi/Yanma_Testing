const authModel = require('./AuthModel');
const dataDummy = require('./DataDummy');

class TranskripNilai {
    transkripNilai(username) {
        const user = authModel.getUser(username);
        // if (!user) return null;

        const fileEntry = dataDummy.FileTranskripNilai.find(entry => entry.username === username);
        if (fileEntry && fileEntry.filePath) {
            return {lulus: user.lulus, file: true};
        } else {
            return {lulus: user.lulus, file: false};
        }
    }

    unduhTranskripNilai(username) {
        const user = authModel.getUser(username);
        // if (!user) return null;

        const fileEntry = dataDummy.FileTranskripNilai.find(entry => entry.username === username);
        if (fileEntry && fileEntry.filePath) {
            return fileEntry.filePath;
        } else {
            return null;
        }
    }
}

module.exports = new TranskripNilai();