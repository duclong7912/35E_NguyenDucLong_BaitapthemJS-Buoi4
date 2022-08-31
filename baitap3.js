                // Cách đọc số

document.getElementById("btnDoc").onclick = function () {

    // Đầu vào:

    var n1 = document.getElementById("number1").value * 1;

    var docSo = "";

    // Xử lý:

    hangTram = Math.floor(n1 / 100);
    hangChuc = Math.floor(n1 / 10 % 10);
    hangDonVi = Math.floor(n1 % 10);

    switch(hangTram) {
        case 0:
            alert('Hàng trăm không xác định')
            hangTram = '';
            break;
        case 1:
            hangTram = 'Một trăm ';
            break;
        case 2:
            hangTram = 'Hai trăm ';
            break;
        case 3:
            hangTram = 'Ba trăm ';
            break;
        case 4:
            hangTram = 'Bốn trăm ';
            break;
        case 5:
            hangTram = 'Năm trăm ';
            break;
        case 6:
            hangTram = 'Sáu trăm ';
            break;
        case 7:
            hangTram = 'Bảy trăm ';
            break;
        case 8:
            hangTram = 'Tám trăm ';
            break;
        case 9:
            hangTram = 'Chín trăm ';
            break;
        default:
            alert("Hàng trăm không xác định.")
            hangTram = '';
            break;
    }

    switch(hangChuc) {
        case 0:
            alert("Hàng chục không xác định.");
            hangChuc = "";
            break;
        case 1:
            hangChuc = 'mười ';
            break;
        case 2:
            hangChuc = 'hai mươi ';
            break;
        case 3:
            hangChuc = 'ba mươi ';
            break;
        case 4:
            hangChuc = 'bốn mươi ';
            break;
        case 5:
            hangChuc = 'năm mươi ';
            break;
        case 6:
            hangChuc = 'sáu mươi ';
            break;
        case 7:
            hangChuc = 'bảy mươi ';
            break;
        case 8:
            hangChuc = 'tám mươi ';
            break;
        case 9:
            hangChuc = 'chín mươi ';
            break;
    }

    switch(hangDonVi) {
        case 0:
            alert ("Hàng đơn vị không xác định.")
            hangDonVi = '';
            break;
        case 1:
            hangDonVi = 'mốt';
            break;
        case 2:
            hangDonVi = 'hai';
            break;
        case 3:
            hangDonVi = 'ba';
            break;
        case 4:
            hangDonVi = 'bốn';
            break;
        case 5:
            hangDonVi = 'năm';
            break;
        case 6:
            hangDonVi = 'sáu';
            break;
        case 7:
            hangDonVi = 'bảy';
            break;
        case 8:
            hangDonVi = 'tám';
            break;
        case 9:
            hangDonVi = 'chín';
            break;
    }

    // Đầu ra: 
    
    docSo = hangTram + hangChuc + hangDonVi;

    document.getElementById("showDocSo").innerHTML = docSo;
}