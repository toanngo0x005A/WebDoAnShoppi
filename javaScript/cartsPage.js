//$(document).ready() trong jQuery là một hàm sẽ được gọi khi toàn bộ tài liệu HTML đã được tải hoàn toàn, 
//tức là khi cấu trúc DOM đã sẵn sàng để được tương tác.
//Trong ngữ cảnh của JavaScript và jQuery, khi trình duyệt tải một trang web, nó phải tải tất cả các 
//phần tử HTML và xây dựng cấu trúc DOM trước khi JavaScript có thể tương tác với chúng. 
//Khi sử dụng $(document).ready(), bạn đảm bảo rằng mã JavaScript của bạn sẽ được thực thi chỉ sau khi 
//tất cả các phần tử HTML đã được tải và DOM đã được cấu trúc. 
//Điều này giúp tránh được các vấn đề khi cố gắng tương tác với các phần tử HTML trước khi chúng tồn tại 
//hoặc được khởi tạo.
//^^Mẹo: Một cách ngắn gọn hơn để gọi $(document).ready() là sử dụng cú pháp rút gọn $(function() {...}). 
//Cả hai cách này đều có cùng một ý nghĩa.
$(document).ready(function() {
    //Vì ý nghĩa của "$(document).ready()" nên
    //Suy ra mỗi khi trang web được tải lên thì sẽ ngay lặp tức chạy các lệnh bên 
    //trong "$(document).ready()" ngay.
    //Giúp tính toán các mục [Thành tiền] và [Tổng tiền] ngay khi trang được tải.
    tinhToanGiaTienSP();

    // Lắng nghe sự kiện khi số lượng sản phẩm thay đổi
    $('.soLuongMua').on('input', function() {
        tinhToanGiaTienSP();
    });


    // Lắng nghe sự kiện khi nhấn nút xóa sản phẩm
    $('.nutXoaSP').click(function() {
        // Lấy dòng sản phẩm tương ứng.
        let pTuSPXoa = $(this).closest('.spTrongGioHang');
    
        $('#xacNhanXoa').click(function() { 
            // Loại bỏ dòng sản phẩm khỏi DOM
            pTuSPXoa.remove();
        
            // Tính toán lại thành tiền của các sản phẩm đòng thời tính lại tổng số tiền cần thanh toán
            tinhToanGiaTienSP();
        });
    });

    $('#xoaSPModal').on('hidden.bs.modal', function() {
        // Gỡ bỏ các sự kiện click đã gán
        $('#xacNhanXoa').off('click');
        console.log('Modal đã bị tắt và các sự kiện click đã được gỡ bỏ.');
    });
    /*Đã fix nhờ chuỗi hàm trên. Không hiểu tại sao fix được thì hãy xem file "chonNhanVat.js" trong
    folder "STGenshin" trong web GenshinChiSo. Cụ thể phần giải thích nằm ở 
    "$('#ModalDanhSachNhanVat').on('hidden.bs.modal)'"*/
});
/*[Lỗi này đã được fix rồi]Cần coi lại phần xóa sản phẩm. Do bị lỗi, cụ thể là
Khi ta nhán vào nút xóa màu đỏ ở sản phẩm A thì nó sẽ hiện lên modal cho ta xác nhận
ta đổi ý không muốn xóa nên ta không nhấn nút xác nhận xóa
Sau đó ta nhấn vào nút xóa màu đỏ ở sản phẩm B thì nó sẽ hiện lên modal cho ta xác nhận
lúc này ta bấm xác nhận xóa thì nó sẽ xóa sản phẩm B và cả sản phẩm A luôn
Tức 1 khi ta nhấn vào nút xóa ở sản phẩm nào thì chắc chắn khi ta bấm vào nút xác nhận xóa trong modal 
thì nó sẽ xóa sản phẩm đó luôn dù ta đang muốn xóa sản phẩm khác thôi.
*/





/*Chức năng chung: tính toán giá tiền cho các sản phẩm trong giỏ hàng và hiển thị tổng giá tiền của 
tất cả các sản phẩm đó.*/
/*Trích bên file "productDetailsPage.js" ở trong folder "Shoppi"
₫₫₫₫Siêu Chú ý: Ta phải cần thận sắp xếp mã html sao cho rõ ràng, cũng như phải chỉ cụ rõ ràng nội dung
cần duyệt( tức địa chỉ cần duyệt), nhất là khi ta sử dụng phương thức ".each()" trong jQuery.
Vì nếu không cẩn thận ta có thể bị lỗi duyệt thừa giá trị cần duyệt dẵn tới việc lỗi mà ta không biết là 
sai ở đâu( do nó không phải lỗi cú pháp). Lỗi có thể là do đường dẵn ta chỉ định cho phương thức .each()
( tức $('#MucHienThiImgPhongTo .carousel-inner').empty();, chỉ là vd thôi chứ mã này không sai)
Hoặc thậm chí khó hơn là lỗi sắp xếp mã html không rõ ràng dẵn tới duyệt thừa, thiếu hay không duyệt được
là việc thường thấy.
Ở trong hàm tinhToanGiaTienSP() này ta đã bị lỗi do không chỉ định địa chỉ rõ ràng
và không sắp xếp mã HTML hợp lí
Cụ thể lúc đo nó đã chỉ định duyệt $('.row').each(function(){..}); nên nó đã duyệt luôn
thẻ row chứa các tên thuộc tính sản phẩm( tức cái row chứa chữ "Sản phẩm", "Thông tin sản phẩm"
"Thành tiền", "Số lượng" và "Chọn")
Dẵn tới biến "bienGiaTien" và biến "bienSoLuong" đã nhận được giá trị NaN( tức không phải số) 
ở lần duyệt thẻ row chứa thuộc tính nói trên.
Do nó chỉ có chữ thôi có số méo đâu nên từ đó dẵn tới biến "bienThanhTien" ở lần duyệt đó cũng là NaN luôn 
Cuối cùng dẵn tới biến "bienTongTien" cũng cộng vào giá trị NaN luôn. Mà biến "bienTongTien" là biến toàn
cục nên nó sẽ duy trì cái NaN này luôn nếu nó cứ cộng thêm vào( tức cộng chính mình vs 1 giá trị khác
vd như này bienTongTien += bienThanhTien) chứ không gán cho giá trị khác( vd như này bienTongTien = bienThanhTien;)
Do như đã biết ấy là nếu 1 biến nhận giá trị NaN thì nếu cộng thêm vào giá trị số thì cũng sẽ là NaN thôi
Nên khi xuất nó sẽ luôn là giá trị NaN
××Vd như bienTongTien = 25687 thì ở lần duyệt này bienThanhTien = NaN 
=> bienTongTien = 25687 + NaN = NaN
sau đó bienTongTien = NaN 
Thì ở lần duyẹt sau bienThanhTien dù bằng số thật thì bienTongTien vẫn là NaN thôi
Vì NaN + giá trị số sẽ luôn bằng NaN.
*/
function tinhToanGiaTienSP() {
    let bienTongTien = 0; //Dùng để lưu trữ tổng giá tiền cần thanh toán

    // Duyệt qua mỗi dòng sản phẩm
    $('#AllSPGioHang .spTrongGioHang').each(function() {
        // Lấy giá tiền và số lượng từ các phần tử tương ứng
        const bienGiaTien = parseFloat($(this).find('.giaTien').text().replace(/[.,đ]/g, ''));
        const bienSoLuong = parseInt($(this).find('.soLuongMua').val());

        // Tính toán thành tiền
        const bienThanhTien = bienGiaTien * bienSoLuong;
        
        // Cộng vào tổng tiền chung
        bienTongTien += bienThanhTien;
        
        // Hiển thị thành tiền trong phần tử có class là 'thanhTien' đang được duyệt hiện tại
        $(this).find('.thanhTien').text(bienThanhTien.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}));
    });
    // Hiển thị tổng tiền của all sản phẩm cần thanh toán
    $('#tongThanhTienSP').text(bienTongTien.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}));
}
//•let bienTongTien = 0;
//Lưu tổng giá tiền của tất cả các sản phẩm trong giỏ hàng, ban đầu được đặt là 0.

//•$('#AllSPGioHang .spTrongGioHang').each(function() {..}
//Sử dụng phương thức .each() của jQuery để duyệt qua từng phần tử có class là "spTrongGioHang"
//nằm trong phần tử có id là "AllSPGioHang".


//•const bienGiaTien = parseFloat($(this).find('.giaTien').text().replace(/[.,đ]/g, ''))
//Được sử dụng để lấy giá tiền của một sản phẩm từ một phần tử HTML và chuyển đổi giá trị đó
//thành một số thực dạng float.
//Chức năng từng bộ phần cụ thể:
    //1. `$(this).find('.giaTien')`: Đoạn này sử dụng jQuery để tìm phần tử con 
    //trong  phần tử hiện tại (`$(this)`) có class là `giaTien`. 
    //Trong mỗi lần lặp của hàm `.each()`, 
    //`$(this)` sẽ đại diện cho một dòng sản phẩm trong giỏ hàng và `.find('.giaTien')` tìm phần tử con 
    //trong dòng sản phẩm đó chứa giá tiền của sản phẩm.
    //2. `.text()`: Phương thức `.text()` được gọi để lấy nội dung văn bản của phần tử `$('.giaTien')`. 
    //Vì trong trường hợp này, giá tiền được hiển thị là một chuỗi văn bản nằm trong phần tử `.giaTien`
    //chứ không phải kiểu số.
    //3. `.replace(/[.,đ]/g, '')`: Sau đó, chúng ta sử dụng phương thức `.replace()` để loại bỏ các ký tự 
    //không cần thiết khỏi chuỗi giá tiền. Biểu thức chính quy `/[.,đ]/g` được sử dụng để 
    //tìm tất cả các ký tự `,`, `.` và `đ` trong chuỗi và thay thế chúng bằng chuỗi rỗng `''`. 
    //Ký tự `g` ở cuối biểu thức chính quy đảm bảo rằng tất cả các ký tự phù hợp trong chuỗi sẽ 
    //được thay thế, không chỉ ký tự đầu tiên.
    //4. `parseFloat()`: Kết quả sau khi loại bỏ các ký tự không cần thiết sẽ là 
    //một chuỗi chứa giá trị số tiền. 
    //Nhằm để chuyển đổi chuỗi này thành một số thực dạng float, chúng ta sử dụng hàm `parseFloat()`. 
    //Hàm này sẽ phân tích một chuỗi và trả về một số thực dạng float.
//Cách thức hoạt động cụ thể:
//Đoạn mã `const bienGiaTien = parseFloat($(this).find('.giaTien').text().replace(/[.,đ]/g, ''));` thực hiện các bước sau:
    //B1. Sử dụng jQuery để tìm phần tử con có class là `.giaTien` bên trong phần tử hiện tại (`$(this)`), 
    //đây là phần tử chứa giá tiền của sản phẩm.
    //B2. Lấy nội dung văn bản của phần tử `.giaTien`.
    //B3. Loại bỏ các ký tự không cần thiết như `,`, `.` và `đ` từ chuỗi giá tiền 
    //bằng cách thay thế chúng bằng chuỗi rỗng.
    //4. Chuyển đổi chuỗi sau khi loại bỏ các ký tự không cần thiết thành một số thực dạng float 
    //bằng cách sử dụng hàm `parseFloat()`.
//==>>Kết quả là biến `bienGiaTien` chứa giá trị số thực biểu diễn cho giá tiền của sản phẩm, 
//đã được chuẩn hóa và sẵn sàng để sử dụng trong các phép toán tính toán khác.


//•const bienSoLuong = parseInt($(this).find('.soLuongMua').val());
//Lấy số lượng của một sản phẩm từ một phần tử HTML và chuyển đổi giá trị đó thành một số nguyên.
//Chức năng từng bộ phận cụ thể:
    //1. `$(this).find('.soLuongMua')`: Đoạn này sử dụng jQuery để tìm phần tử con 
    //trong phần tử hiện tại (`$(this)`) có class là `form-control`. 
    //Trong mỗi lần lặp của hàm `.each()`, thì `$(this)` sẽ đại diện cho một dòng sản phẩm trong giỏ hàng 
    //Còn `.find('.soLuongMua')` sẽ tìm phần tử con trong dòng sản phẩm đó chứa số lượng của sản phẩm.
    //2. `.val()`: Phương thức `.val()` được gọi để lấy giá trị của thuộc tính `value` của 
    //phần tử `.soLuongMua`.
    //3. `parseInt()`: Kết quả sau khi lấy giá trị của số lượng sẽ là một chuỗi chứa giá trị số. 
    //Để chuyển đổi chuỗi này thành một số nguyên, chúng ta sử dụng hàm `parseInt()`. 
    //Hàm này sẽ phân tích một chuỗi và trả về một số nguyên.
//Kết quả là biến `bienSoLuong` chứa số nguyên biểu diễn cho số lượng của sản phẩm, đã được chuẩn hóa 
//và sẵn sàng để sử dụng trong các phép toán tính toán khác.

//Tóm lại 2 dòng mã trên là:
//Lấy giá tiền và số lượng của từng sản phẩm
//Trong mỗi lần lặp, lấy giá tiền và số lượng của sản phẩm hiện tại từ các phần tử tương ứng trong DOM. 
    //-Đối với giá tiền, giá trị được lấy từ phần tử có class là "giaTien" 
    //và được chuyển đổi thành số dạng float. 
    //-Đối với số lượng, giá trị được lấy từ phần tử có class là form-control và được chuyển đổi 
    //thành số dạng integer.



//•const bienThanhTien = bienGiaTien * bienSoLuong;
//Sau khi lấy được 2 giá trị là giá tiền( được chứa trong biến "bienGiaTien")
//và số lượng( được chứa trong biến "bienSoLuong").
//Thì để tính mục Thành tiền ta chỉ việc nhân chúng lại rồi gán cho biến "bienThanhTien"
//để lưu trữ nhằm sau này tính tổng tiền và xuất ra ô Thành tiền cho dễ.

//•bienTongTien += bienThanhTien;
//Chỉ đơn giản là cộng thêm cho biến "bienTongTien": số tiền thành tiền của sản phẩm đang 
//được tính toán hiện tại( tức tổng số tiền cần thanh toán cho riêng sản phẩm đang được tính toán).
//Giúp 1 khi kết thúc quá trinh duyệt( tức đã duyệt hết mọi phần tử có class là "spTrongGioHang"
//nằm trong phần tử có id là "AllSPGioHang") thì ta sẽ có được 1 biến mang tổng số tiền cần thanh toán
//của mọi sản phâm đã duyệt qua.



//•$(this).find('.thanhTien').text(bienThanhTien.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}));
//Chức năng chung:  hiển thị giá tiền trong giỏ hàng của trang web bán hàng, giúp người dùng có cái nhìn 
//rõ ràng về tổng chi phí và sản phẩm mua hàng.
//Chức năng từng bộ phận cụ thể:
    //1. `$(this).find('.thanhTien')`: Sử dụng jQuery để tìm phần tử con trong phần tử hiện tại (`$(this)`) 
    //có class là `.thanhTien`. 
    //Như đã nói thì trong mỗi lần lặp của hàm `.each()`, `$(this)` đại diện cho 
    //một dòng sản phẩm trong giỏ hàng 
    //Nên `.find('.thanhTien')` tìm phần tử con trong dòng sản phẩm đó chứa thông tin về thành tiền 
    //của sản phẩm hiện đang được duyệt.
    //2. `.text()`: Phương thức `.text()` được gọi để thiết lập nội dung văn bản của phần tử `.thanhTien`.
    //3. `bienThanhTien.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})`: 
    //Đoạn này chuyển đổi giá trị của biến `bienThanhTien` thành một chuỗi được định dạng theo định dạng 
    //tiền tệ của Việt Nam (`'vi-VN'`). Hàm `toLocaleString()` được sử dụng để chuyển đổi số thành 
    //chuỗi với các tùy chọn định dạng như 'currency' và 'currency' là `'VND'`, 
    //điều này sẽ định dạng số thành một chuỗi hiển thị giá trị tiền tệ Việt Nam (VND) 
    //với dấu phân cách hàng nghìn và dấu phân cách thập phân phù hợp.
//Cách thức hoạt động cụ thể:
    //1. Sử dụng jQuery để tìm phần tử con trong dòng sản phẩm hiện tại có class là `.thanhTien`.
    //2. Thiết lập nội dung văn bản của phần tử `.thanhTien`.
    //3. Chuyển đổi giá trị của biến `bienThanhTien` thành chuỗi định dạng tiền tệ của Việt Nam (VND) 
    //sử dụng `toLocaleString()`.
    //4. Nội dung văn bản của phần tử `.thanhTien` được thiết lập thành giá trị của biến `bienThanhTien` 
    //đã được định dạng, để hiển thị cho người dùng.
//==>>Kết quả là nội dung văn bản của phần tử `.thanhTien` sẽ được thiết lập 
//thành giá trị của biến `bienThanhTien` được định dạng theo định dạng tiền tệ của Việt Nam (VND) 
//để hiển thị cho người dùng. Điều này cho phép hiển thị số tiền một cách dễ đọc và dễ hiểu.


//•$('#tongThanhTienSP').text(bienTongTien.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'}));
//Giống y như lệnh [Hiên thị thành tiền của sản phẩm], chỉ khác ở giá trị hiển thị và chỗ hiển thị thôi.
//Thực hiện việc hiển thị tổng giá tiền của tất cả các sản phẩm trong giỏ hàng lên giao diện người dùng.
    //1.`$('#tongThanhTienSP')`: Sử dụng jQuery để chọn phần tử có id là `tongThanhTienSP`, 
    //đây là nơi để hiển thị tổng giá tiền chung của giỏ hàng.
    //2. `.text()`: Phương thức `.text()` được gọi để thiết lập nội dung văn bản của phần tử được chọn.
    //3. `bienTongTien.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})`: 
    //Chuyển đổi giá trị của biến `bienTongTien` thành một chuỗi được định dạng theo định dạng tiền tệ 
    //của Việt Nam (VND) sử dụng `toLocaleString()`. 
    //Điều này đảm bảo rằng tổng giá tiền sẽ được hiển thị một cách đúng đắn và dễ đọc cho người dùng.
//Kết quả là tổng giá tiền của tất cả các sản phẩm trong giỏ hàng sẽ được hiển thị dưới dạng tiền tệ 
//của Việt Nam (VND) trên giao diện người dùng, giúp người dùng dễ dàng nhận biết và hiểu được số tiền cần thanh toán.

