function sapXepNgayDat(sapXep) {
    const moiDonHang = document.getElementById('AllDonHang');   
    //Lấy phần tử HTML có id là AllDonHang, đây là phần tử chứa tất cả các đơn hàng.
    const donHang = Array.from(moiDonHang.getElementsByClassName('donHang'));
    //Lấy tất cả các phần tử có lớp "donHang"(từng đơn hàng) bên trong biến "moiDonHang"
    //và chuyển đổi chúng thành một mảng để có thể dễ dàng thao tác.

    donHang.sort((a, b) => {
        const ngayDatA = new Date(a.querySelector('.ngayDat').innerText.split('/').reverse().join('-'));
        const ngayDatB = new Date(b.querySelector('.ngayDat').innerText.split('/').reverse().join('-'));
        return sapXep === 'asc' ? ngayDatA - ngayDatB : ngayDatB - ngayDatA;
    });
    /*Lấy ngày đặt hàng:
        •ngayDatA và ngayDatB là ngày đặt hàng của hai đơn hàng được so sánh.
        •a.querySelector('.ngayDat').innerText lấy chuỗi ngày tháng của đơn hàng.
        •split('/').reverse().join('-') chuyển đổi chuỗi ngày tháng từ định dạng dd/mm/yyyy 
        thành yyyy-mm-dd để có thể tạo đối tượng Date trong JavaScript.
        ***Xem cụ thể hơn là ở bên dưới***
        **Đối tượng "Date" trong javaScript là đối tượng được sử dụng để làm việc với ngày và giờ.**

    Sắp xếp:
        •Hàm sort so sánh hai ngày ngayDatA và ngayDatB.
        •Nếu sapXep là 'asc' (tăng dần), thì so sánh ngayDatA - ngayDatB.
        •Nếu sapXep là 'desc' (giảm dần)( tức không phải sapXep là 'asc'), thì so sánh ngayDatB - ngayDatA.
    */

    donHang.forEach(sapXep => moiDonHang.appendChild(sapXep));
    //Duyệt qua mảng "donHang" đã sắp xếp và thêm từng đơn hàng trở lại vào "moiDonHang". 
    //Điều này sẽ hiển thị các đơn hàng theo thứ tự đã sắp xếp.

    const chuoiQueryString = `?sort=date&order=${sapXep}&num=20`;
    window.history.pushState(null, '', chuoiQueryString);
    /*
    1. Tạo chuỗi truy vấn: chuoiQueryString là chuỗi truy vấn mới dựa trên giá trị order (tăng dần hoặc giảm dần).
    2. Cập nhật URL: window.history.pushState thay đổi URL hiện tại của trình duyệt mà không tải lại trang, 
    giúp URL phản ánh trạng thái sắp xếp hiện tại.
    */
}
/*Hàm sapXepNgayDat: giúp sắp xếp các đơn hàng theo ngày đặt hàng 
và cập nhật URL để phản ánh thứ tự sắp xếp hiện tại. 
Cụ thể, nó lấy danh sách các đơn hàng, sắp xếp chúng theo ngày (tăng dần hoặc giảm dần), 
sau đó cập nhật lại hiển thị và URL của trang.
*/


/*Lệnh: new Date(a.querySelector('.ngayDat').innerText.split('/').reverse().join('-'));
Cũng như: new Date(b.querySelector('.ngayDat').innerText.split('/').reverse().join('-'));
Dòng mã đó có chức năng chuyển đổi một chuỗi ngày tháng từ định dạng "dd/mm/yyyy" 
sang đối tượng Date trong JavaScript. Hãy cùng giải thích chi tiết:
    1. `a.querySelector('.ngayDat')`: Điều này chọn phần tử HTML bên trong đơn hàng `a` mà 
    có lớp (class) là `'ngayDat'`. Trong trường hợp này, đây là phần tử chứa ngày đặt hàng.
    2. `.innerText`: Thuộc tính này trả về nội dung văn bản bên trong phần tử được chọn,
    tức là chuỗi ngày tháng, chẳng hạn "23/05/2024".
    3. `.split('/')`: Phương thức này chia chuỗi thành một mảng các phần tử, 
    sử dụng dấu '/' làm dấu phân cách. 
    Kết quả là một mảng gồm các phần tử là "23", "05", "2024".
    4. `.reverse()`: Phương thức này đảo ngược thứ tự các phần tử trong mảng. 
    Kết quả là một mảng mới với các phần tử trong thứ tự "2024", "05", "23".
    5. `.join('-')`: Phương thức này nối các phần tử của mảng thành một chuỗi, 
    sử dụng dấu '-' làm dấu phân cách. 
    Kết quả là chuỗi "2024-05-23", theo định dạng "yyyy-mm-dd".
    6. `new Date()`: Dùng để tạo đối tượng Date trong JavaScript.
Vậy dòng mã chuyển đổi chuỗi ngày tháng nằm từ định dạng "dd/mm/yyyy" 
thành đối tượng Date trong JavaScript( phù hợp với định dạng yyyy-mm-dd), 
để có thể so sánh và thực hiện việc sắp xếp theo thứ tự ngày.
*/



/*Tương tự hàm sapXepNgayDat. Nhưng khác ở chỗ so sánh donHang.sort(a, b)
và chỗ hằng "chuoiQueryString" 1 tí.*/
function sapXepTongTien(sapXep) {
    const moiDonHang = document.getElementById('AllDonHang');   
    const donHang = Array.from(moiDonHang.getElementsByClassName('donHang'));

    donHang.sort((a, b) => {
        const tongTienA = parseFloat(a.querySelector('.tongTien').innerText.replace(/\D/g, ''));
        const tongTienB = parseFloat(b.querySelector('.tongTien').innerText.replace(/\D/g, ''));
        return sapXep === 'asc' ? tongTienA - tongTienB : tongTienB - tongTienA;
    });

    donHang.forEach(sapXep => moiDonHang.appendChild(sapXep));

    const chuoiQueryString = `?sort=tongtien&order=${sapXep}&num=20`;
    window.history.pushState(null, '', chuoiQueryString);
}

/*Lệnh: const tongTienA = parseFloat(a.querySelector('.tongTien').innerText.replace(/\D/g, ''));
Cũng như: const tongTienB = parseFloat(b.querySelector('.tongTien').innerText.replace(/\D/g, ''));
Dòng mã này có chức năng chuyển đổi chuỗi số trong phần tử HTML thành một giá trị số thực (float) 
trong JavaScript. Hãy cùng giải thích chi tiết từng phần:
    1. `a.querySelector('.tongTien')`: Điều này chọn phần tử HTML bên trong đơn hàng `a` 
    mà có lớp (class) là `'tongTien'`. 
    Trong trường hợp này, đây là phần tử chứa tổng tiền của đơn hàng.
    2. `.innerText`: Thuộc tính này trả về nội dung văn bản bên trong phần tử được chọn, 
    tức là chuỗi số, chẳng hạn "56.000.000₫".
    3. `.replace(/\D/g, '')`: Phương thức này thay thế tất cả các ký tự không phải là số trong chuỗi 
    bằng chuỗi rỗng, tức là loại bỏ tất cả các dấu chấm, dấu phẩy, ký hiệu tiền tệ và bất kỳ ký tự 
    không phải số nào khác. 
        - `\D`: Là ký tự viết tắt cho "không phải là số" trong biểu thức chính quy.
        - `g`: Là cờ global, áp dụng cho toàn bộ chuỗi, không chỉ dừng lại ở lần xuất hiện đầu tiên.
        - `''`: Chuỗi rỗng, tức là không có gì để thay thế.
    =>Kết quả của phép replace là một chuỗi chỉ chứa các ký tự số, chẳng hạn "56000000".
    4. `parseFloat()`: Hàm này chuyển đổi một chuỗi thành một số thực (float). 
    Trong trường hợp này, nó chuyển đổi chuỗi số được loại bỏ dấu phân cách (nếu có) 
    sang một giá trị số thực.
Vậy dòng mã làm cho `tongTienA` cũng như tongTienB trở thành giá trị số thực tương ứng với tổng tiền 
của đơn hàng `a`, loại bỏ tất cả các ký tự không phải số từ chuỗi tổng tiền.
*/





function liDoHuyDon() {
    alert('Lí do hủy: Đổi ý');
    /*
    alert('Lí do hủy: Đổi ý'); là một câu lệnh trong JavaScript để hiển thị một hộp thoại cảnh báo 
    trên trình duyệt của người dùng với nội dung là "Lí do hủy: Đổi ý".
    Hộp thoại cảnh báo thường được sử dụng để thông báo các thông tin quan trọng hoặc cảnh báo 
    về các hành động người dùng cần thực hiện hoặc cần tránh. 
    Bạn có thể sử dụng alert() để thông báo thông tin bình thường cho người dùng một cách dễ dàng.
    Nhưng nhớ, việc sử dụng alert() quá nhiều có thể làm phiền người dùng, vì nó làm gián đoạn 
    quá trình duyệt web của họ. Hãy sử dụng nó một cách cân nhắc và chỉ khi thực sự cần thiết.
    */
};




//Tạo nút hủy đơn
function huyDon() {
    const xacNhan = confirm('Bạn muốn hủy đơn');
    
    if (xacNhan){
        const nutDangXuLi = document.querySelector('.donHang .btn-danger');
        nutDangXuLi.className = 'btn btn-secondary btn-sm';
        nutDangXuLi.textContent = 'Đã hủy';
        nutDangXuLi.onclick = function() {
            alert('Lí do hủy: Đổi ý');
        };
    }
};


