class Kendaraan {
  totalRoda = 0;
  kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
  tambahKecepatan(kecepatanBaru) {
    return (this.kecepatanPerJam = this.kecepatanPerJam + kecepatanBaru);
  }

  berjalan() {
    return this.tambahKecepatan(10);
  }
}

const mobilCepat = new Mobil();
mobilCepat.totalRoda = 4;
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();

const mobilLamban = new Mobil();
mobilLamban.totalRoda = 4;
mobilLamban.berjalan();

console.log({ mobilCepat });
console.log({ mobilLamban });
