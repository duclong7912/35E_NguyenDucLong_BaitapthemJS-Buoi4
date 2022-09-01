                    //   Tính ngày

/**
 * - Đầu vào:
 * 
 * đặt biến cho người dùng nhập liệu
 * var nhapThang = ?
 * var nhapNam = ?
 * 
 * đặt biến để hiển thị kết quả
 * var tinhNgay = "";
 * 
 * - Xử lý:
 * 
 * Để xác định năm nhuận của tháng 2
 * nhapNam % 4 === 0 && (nhapNam % 100 !== 0 || nhapNam % 100 === 0)
 * Xác định những tháng có 31 ngày
 * Xác định những tháng có 30 ngày
 * Đối với tháng 2 không phải năm nhuận thì là 28 ngày
 * 
 * - Đầu ra:
 * 
 * tinhNgay = ?
 */
                    
document.getElementById("btnTinhNgay").onclick = function () {

    // Đầu vào:

    var nhapThang = document.getElementById("nhapThang").value * 1;
    var nhapNam = document.getElementById("nhapNam").value * 1;

    var tinhNgay = "";

    // Xử lý:

    if(nhapThang > 12) {
        tinhNgay = "Vui lòng nhập tháng hợp lệ";
    } else if (nhapNam % 4 === 0 && (nhapNam % 100 !== 0 || nhapNam % 100 === 0)  && nhapThang === 2) {
        tinhNgay = "Tháng " + nhapThang + " năm " + nhapNam + ' có 29 ngày';
    } else if (nhapThang == 1 || nhapThang == 3 || nhapThang == 5 || nhapThang == 7 || nhapThang == 8 || nhapThang == 10 || nhapThang == 12) {
        tinhNgay = " Tháng " + nhapThang + " năm " + nhapNam + ' có 31 ngày';
    } else if (nhapThang == 4 || nhapThang == 6 || nhapThang == 9 || nhapThang == 11) {
        tinhNgay = " Tháng " + nhapThang + " năm " + nhapNam + ' có 30 ngày';
    } else if (nhapThang == 2) {
        tinhNgay = "Tháng " + nhapThang + " năm " + nhapNam + ' có 28 ngày';
    }

    // Đầu ra:

    document.getElementById("showTinhNgay").innerHTML = tinhNgay;
}