                // Tìm sinh viên xa trường nhất

document.getElementById("btnTim").onclick = function () {

    // Đầu vào:

    var t1 = document.getElementById("ten1").value;
    var t2 = document.getElementById("ten2").value;
    var t3 = document.getElementById("ten3").value;
    var x1 = document.getElementById("x1").value * 1;
    var x2 = document.getElementById("x2").value * 1;
    var x3 = document.getElementById("x3").value * 1;
    var x4 = document.getElementById("x4").value * 1;
    var y1 = document.getElementById("y1").value * 1;
    var y2 = document.getElementById("y2").value * 1;
    var y3 = document.getElementById("y3").value * 1;
    var y4 = document.getElementById("y4").value * 1;

    var thongBao = '';
   
    // Xử lý:

    d14 = Math.sqrt((x4 - x1) ** 2 + (y4 - y1) ** 2);
    d24 = Math.sqrt((x4 - x2) ** 2 + (y4 - y2) ** 2);
    d34 = Math.sqrt((x4 - x3) ** 2 + (y4 - y3) ** 2);

    if (d14 > d24 && d14 > d34) {
        thongBao = "Sinh viên xa trường nhất: " + t1;
    } else if (d24 > d14 && d24 > d34) {
        thongBao = "Sinh viên xa trường nhất: " + t2;
    } else if (d34 > d14 && d34 > d24) {
        thongBao = "Sinh viên xa trường nhất: " + t3;
    }

    document.getElementById("showTim").innerHTML = thongBao;

}