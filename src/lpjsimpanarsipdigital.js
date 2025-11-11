class LPJSimpanArsipDigital {
    saveFile(file) {
      if (!file || !file.name) return { saved: false };
      return { saved: true, path: `/arsip/${file.name}` };
    }
  }
  
  module.exports = LPJSimpanArsipDigital;
  