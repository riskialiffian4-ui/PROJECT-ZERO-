function hitungTotal() {
    let rows = document.querySelectorAll("#produk tr");
    let total = 0;

    rows.forEach(row => {
        let harga = parseInt(row.children[1].innerText);
        let jumlah = row.children[2].children[0].value;
        total += harga * jumlah;
    });

    document.getElementById("total").innerText = total;
}

function cetakNota() {
    hitungTotal();

    let rows = document.querySelectorAll("#produk tr");
    let nota = "===== NOTA BELANJA =====\n";

    rows.forEach(row => {
        let nama = row.children[0].innerText;
        let harga = row.children[1].innerText;
        let jumlah = row.children[2].children[0].value;

        if (jumlah > 0) {
            nota += `${nama} x ${jumlah} = Rp ${harga * jumlah}\n`;
        }
    });

    nota += "------------------------\n";
    nota += "Total: Rp " + document.getElementById("total").innerText;

    let win = window.open("", "", "width=400,height=600");
    win.document.write("<pre>" + nota + "</pre>");
    win.print();
}
setTimeout(function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
}, 2000); // 2 detik
