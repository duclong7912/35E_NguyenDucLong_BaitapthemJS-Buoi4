                // Tính ngày tháng năm

document.getElementById("homQua").onclick = function () {

    // Đầu vào:

    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;

    var ngayThangNam = "";

    // Xử lý:

    if (ngay > 31) {
        ngayThangNam = "Không có ngày này !";
    } else if (thang > 12) {
        ngayThangNam = "Tháng không hợp lệ !"
    } else if (ngay > 1 && (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12)) {
        ngayThangNam = --ngay + "/" + thang + '/' + nam;
    } else if (ngay > 30 && (thang == 2 || thang == 4  || thang == 6 || thang == 9 || thang == 11) ) {
        ngayThangNam = "Không có ngày này !";
    } else if (ngay <= 30 && ngay > 1 && (thang == 4 || thang == 6 || thang == 9 || thang == 11) ) {
        ngayThangNam = --ngay + "/" + thang + '/' + nam;
    } else if (ngay > 28 && (thang == 2)) {
        ngayThangNam = "Không có ngày này !";
    } else if (ngay <= 28 && ngay > 1 && (thang == 2)) {
        ngayThangNam = --ngay + "/" + thang + '/' + nam;
    } else if (ngay = 1 && thang == 1) {
        ngayThangNam = (ngay = 31) + '/' + (thang = 12) + '/' + --nam;
    } else if (ngay = 1 && (thang == 2 || thang == 4 || thang == 6 || thang == 9 || thang == 11)) {
        ngayThangNam = (ngay = 31) + '/' + --thang + '/' + nam;
    } else if (ngay = 1 && (thang == 5 || thang == 7 || thang == 10 || thang == 12)) {
        ngayThangNam = (ngay = 30) + '/' + --thang + '/' + nam;
    } else if (ngay = 1 && thang == 3) {
        ngayThangNam = (ngay = 28) + '/' + --thang + '/' + nam;
    } else if (ngay = 1 && thang == 8) {
        ngayThangNam = (ngay = 31) + '/' + --thang + '/' + nam;
    } else {
        ngayThangNam = "Không có ngày này !";
    }

    // Đầu ra:

    document.getElementById("showNgay").innerHTML = ngayThangNam;
    
}

document.getElementById("ngayMai").onclick = function () {

    // Đầu vào: 

    var ngay = document.getElementById("ngay").value * 1;
    var thang = document.getElementById("thang").value * 1;
    var nam = document.getElementById("nam").value * 1;

    var ngayThangNam = "";

    // Xử lý:

    if (ngay > 31) {
        ngayThangNam = "Không có ngày này !";
    } else if (thang > 12) {
        ngayThangNam = "Tháng không hợp lệ !"
    } else if (ngay <= 30 && (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12)) {
        ngayThangNam = ++ngay + "/" + thang + '/' + nam;
    } else if (ngay > 30 && (thang == 2 || thang == 4  || thang == 6 || thang == 9 || thang == 11) ) {
        ngayThangNam = "Không có ngày này !";
    } else if (ngay <= 29 && (thang == 4 || thang == 6 || thang == 9 || thang == 11) ) {
        ngayThangNam = ++ngay + "/" + thang + '/' + nam;
    } else if (ngay > 28 && (thang == 2)) {
        ngayThangNam = "Không có ngày này !";
    } else if (ngay <= 27 && (thang == 2)) {
        ngayThangNam = ++ngay + "/" + thang + '/' + nam;
    } else if (ngay = 31 && thang == 12) {
        ngayThangNam = (ngay = 1) + '/' + (thang = 1) + '/' + ++nam;
    } else if (ngay = 30 && (thang == 2 || thang == 4 || thang == 6 || thang == 9 || thang == 11)) {
        ngayThangNam = (ngay = 1) + '/' + ++thang + '/' + nam;
    } else if (ngay = 31 && (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12)) {
        ngayThangNam = (ngay = 1) + '/' + ++thang + '/' + nam;
    } else {
        ngayThangNam = "Không có ngày này !";
    }

    // Đầu ra: 

    document.getElementById("showNgay").innerHTML = ngayThangNam;
}