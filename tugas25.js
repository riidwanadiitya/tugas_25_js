function tugas25() {
    var bilangan = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
    console.log("Sebelumnya : " + bilangan);
    bilanganTerkecil = bilangan.sort();
    console.log("Ascending : " + bilanganTerkecil);
    bilanganTerbesar = bilangan.reverse();
    console.log("Descending : " + bilanganTerbesar);
    penyaringan = bilangan.filter(bilangan => { return bilangan > 10 });
    console.log("Filter > 10 : " + penyaringan);
}
tugas25();