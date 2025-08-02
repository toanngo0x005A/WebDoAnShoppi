$(document).ready(function() {
    $('#ChonChucNang a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
    })
});
/*Giải thích cách hoạt động đơn giản:
    1. Nó gắn một hành động khi một phần tử <a> trong phần tử có id là #ChonChucNang được nhấp chuột.
    2. Hành động này ngăn chặn hành vi mặc định của trình duyệt (chẳng hạn chuyển hướng đến một URL khác) bằng cách sử dụng e.preventDefault().
    3. Cuối cùng, nó kích hoạt tab tương ứng với phần tử <a> được nhấp chuột bằng cách sử dụng .tab('show').
=>Nói một cách đơn giản, khi bạn nhấp vào một liên kết trong phần tử có id là #ChonChucNang, 
thì nó sẽ không chuyển hướng như thông thường mà thay vào đó chỉ kích hoạt hiển thị tab tương ứng.
    
Giải thích chi tiết:    
    Mã JavaScript bạn đã cung cấp là một đoạn mã sử dụng thư viện jQuery để xử lý sự kiện khi 
người dùng nhấp vào một phần tử `<a>` bên trong phần tử có id là `#ChonChucNang`. 
Dưới đây là giải thích từng dòng trong mã:
    1. `$(document).ready(function() { ... });`: Đây là cách sử dụng jQuery để chờ cho toàn bộ DOM 
    (Document Object Model) của trang web được tải xong trước khi bắt đầu thực hiện mã JavaScript 
    bên trong. Điều này đảm bảo rằng các phần tử DOM có thể được chọn và xử lý sau khi chúng đã sẵn sàng.
    2. `$('#ChonChucNang a')`: Đây là cách chọn tất cả các phần tử `<a>` mà là con của phần tử 
    có id là `#ChonChucNang`. Ký hiệu `#` được sử dụng để chỉ ra một phần tử có id cụ thể.
    3. `.on('click', function (e) { ... })`: Đây là phương thức của jQuery để gắn một sự kiện nhất định 
    (trong trường hợp này là sự kiện click) với các phần tử đã được chọn. 
    Trong trường hợp này, mỗi khi một phần tử `<a>` bên trong `#ChonChucNang` được nhấp chuột, 
    hàm callback được truyền vào sẽ được thực thi.
    4. `e.preventDefault()`: Đây là một phương thức của đối tượng sự kiện `e` (event object) trong 
    JavaScript, được sử dụng để ngăn chặn hành vi mặc định của trình duyệt khi một sự kiện được kích hoạt.
    Trong trường hợp này, `e.preventDefault()` được sử dụng để ngăn chặn hành vi mặc định của việc nhấp 
    vào một liên kết (`<a>`), nghĩa là không chuyển hướng đến URL mà liên kết đó đích đến.
    5. `$(this).tab('show')`: Đây là cách sử dụng phương thức `.tab('show')` của Bootstrap jQuery 
    để kích hoạt tab tương ứng với phần tử `<a>` được nhấp chuột. 
    Khi một liên kết được nhấp, tab tương ứng sẽ được hiển thị.
*/




////####Phần ĐĂNG NHẬP
//Các khái niệm quan trọng trong Regex:
    /*Khái niệm về Regular expressions Pattern( Mẫu biểu thức chính quy, có thể gọi tắt là "Mẫu"( pattern)): 
    là một biểu thức có điều kiện đầy đủ
    Chúng được đặt bên trong cặp dấu gạch chéo lên, tức /[nội dung]/
    ××Vd như: /^[a-zA-Z][a-zA-Z0-9_]{5,31}$/;
    Ta cũng có thể gọi nó là "Mẫu biểu thức chính quy" là "Biểu thức chính quy" cũng không sai, 
    nhưng phải nói rõ là "Biểu thức chính quy hoàn chỉnh" để phần biệt với khái niệm "Biểu thức chính quy"
    bên dưới.
    Ta gọi "Mẫu" là dạng hoàn chỉnh đầy đủ là do nó tập hợp tất cả điều kiện
    ( tức bao gồm mọi "Biểu thức chính quy" cũng như Positive Lookahead) 
    cần kiểm tra lại chứ không như các "Biểu thức chính quy"
    ( tức như [a-zA-Z] hay [0-9]), chúng chỉ là 1 phần của điều kiện cần kiểm tra
    với chuỗi cần được so sánh thôi)
    Vì thế ta cứ gọi dạng điều kiện đầy đủ này là "Biểu thức chính quy"( regular expressions) cho dễ phân biệt.
    */
    /*Khái niệm về Regular expressions( Biểu thức chính quy, Regex): có thể hiểu là các biểu thức con 
    nằm trong Mẫu( tức Mẫu biểu thức chính quy, regular expressions pattern)
    Đây là một chuỗi các ký tự đặc biệt được sử dụng để định rõ cho "Mẫu biểu thức chính quy" 
    trong việc tìm kiếm và so khớp với các chuỗi văn bản. 
    Mỗi regular expression( Biểu thức chính quy, Regex) đều mô tả một tập hợp các chuỗi có thể có 
    hoặc không có trong văn bản đích.
    Chúng được đặt bên trong cặp dấu ngoặc vuông, tức [điều kiện]
    ××Vd như [a-zA-Z] hay [0-9]
    */
    /*Khái niệm về dấu "^" trong biểu thức chính quy: sẽ bắt buộc chuỗi người dùng nhập
    phải bắt đầu bằng "Biểu thức chỉnh quy"( regular expressions) ở phía sau và nằm nhất so với ký tự "^".
    ××Vd1: /^[a-zA-Z][a-zA-Z0-9_]{5,31}$/;
    =>Áp dụng dấu "^" cho biểu thức chính quy [a-zA-Z]. 
    Tức Ký tự bắt đầu bắt buộc là chữ thường hoặc chữ hoa.
    ××Vd2: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/; 
    =>Áp dụng dấu "^" cho biểu thức chính quy [a-zA-Z\d]. 
    Tức Ký tự bắt đầu bắt buộc là chữ thường, chữ hoa hoặc số.
    ××Vd3: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-z][a-zA-Z\d]{6,20}$/;
    =>Áp dụng dấu "^" cho biểu thức chính quy [a-z]. 
    Tức Ký tự bắt đầu bắt buộc là chữ thường.

    $$$$Câu hỏi đắt giá 2: Nhưng nếu ta không cần chỉ định ký tự đầu tiên thì bỏ đi dấu "^"
    có được không? Có khác gì không?
    =>Sẽ có sự khác biệt
    Vì nếu ta bỏ đi thì mọi ký tự sẽ được tự do, không bị giới hạn bởi bất cứ thứ gì.
    ( kể cả các "Biểu thức chính quy" trong "Mẫu" luôn).
    ××VD như /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
    Tương tự vd ngay trên nhưng mất đi dấu "^"
    Lúc này, mọi ký tự nhập vào sẽ không bị giới hạn bởi bất kỳ điều kiện nào.
    Tức bạn có thể nhập các ký tự là các ký tự đặc biệt như #, $, %, ?, >, ], !, &,...
    thì nó vẫn chấp nhận.
    Nhưng nó vẫn tuân thủ "Lượng từ"(quantifier), ở vd trên thì là "{6,20}"
    Tức bạn có thể nhập bất kỳ ký tự nào cũng thỏa nhưng vẫn bị giới hạn bởi số lượng
    ký tự từ 6 đến 20 ký tự.
    =>Nên thường chả ai khùng mà đi bỏ dấu "^" cả.
    */
    /*Khái niệm về Positive Lookahead( tiếng việt dich tạm là "Tìm kiếm xuôi tích cực")
    Dạng công thức chung của nó là: (?=.*[điều kiện])
    Trong đó: 
        - `(?= ... )`: Đây là cú pháp bắt đầu của Positive Lookahead.
        - `.*`: Một chuỗi bất kỳ ký tự (bao gồm cả khoảng trắng), được biểu thị bởi `.` 
        (ký tự đại diện cho một ký tự bất kỳ) kết hợp với `*` (khớp với 0 hoặc nhiều ký tự).
        - `[điều kiện]`: Điều kiện cụ thể mà chúng ta muốn kiểm tra xem có xuất hiện trong chuỗi 
        hay không. 
        Điều kiện này có thể là bất kỳ "Biểu thức chính quy" nào, chẳng hạn như `[a-z]` 
        (ký tự viết thường từ a-z), `[A-Z]` (ký tự viết hoa từ A-Z), `[0-9]` (chữ số từ 0-9),..
    =>Kết hợp lại, `(?=.*[điều kiện])` sẽ kiểm tra xem trong chuỗi có xuất hiện điều kiện cụ thể 
    mà chúng ta đã chỉ định hay không
    */
    /*Khái niệm về "Lượng từ"( Quantifier): xác định lần xuất hiện của một "Biểu thức chính quy"
    nằm ở phía trước và gần nhất với "Lượng từ".
    ××Vd1: /^[a-zA-Z][a-zA-Z0-9_]{5,31}$/;
    =>Áp dụng {5,31} cho biểu thức chính quy [a-zA-Z0-9_]. 
    Tức số lần xuất hiện của các ký tự thỏa [a-zA-Z0-9_] sẽ bắt buộc từ 5 đến 31 lần
    Còn [a-zA-Z] do không có "Lượng từ" nên lượng từ mặc định là 1 lần.
    Vậy tính chung all điều kiện của "Mẫu" thì ta sẽ phải nhập số lượng ký tự từ 6 đến 32.
    ××Vd2: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;
    =>Áp dụng {6,20} cho biểu thức chính quy [a-zA-Z\d]
    Tức số lần xuất hiện của các ký tự thỏa [a-zA-Z\d] sẽ bắt buộc từ 6 đến 20 lần.
    Và do không có bắt kỳ "Biểu thức chính quy" nào khác nữa.
    Vậy nên "Mẫu" ở đây sẽ phải nhập số lượng ký tự từ 6 đến 20.
    ××Vd3: /^(?=.*[a-z])[a-z][a-zA-Z\d](?=.*[A-Z])(?=.*\d){6,20}$/;
    =>Áp dụng {6,20} cho biểu thức chính quy [a-zA-Z\d]
    Tức số lần xuất hiện của các ký tự thỏa [a-zA-Z\d] sẽ bắt buộc từ 6 đến 20 lần.
    Còn [a-z] do không có "Lượng từ" nên lượng từ mặc định là 1 lần.
    Vậy tính chung all điều kiện của "Mẫu" thì ta sẽ phải nhập số lượng ký tự từ 7 đến 21.
    ××Vd4: /^[a-zA-Z]{3,6}[a-zA-Z0-9_]{5,31}$/; 
    =>Áp dụng {3,6} cho biểu thức chính quy [a-zA-Z]. Và {5,31} cho [a-zA-Z0-9_]
    Tức số lần xuất hiện của các ký tự thỏa [a-zA-Z] sẽ bắt buộc từ 3 đến 6 lần
    Còn số lần xuất hiện của các ký tự thỏa [a-zA-Z0-9_] sẽ bắt buộc từ 5 đến 31 lần
    Vậy tính chung all điều kiến của "Mẫu" thì ta sẽ phải nhập số lượng ký tự từ 8 đến 37 lần.
    $$Ý nghĩa của cả "Mẫu" ở VD4 này là:
    Mẫu biểu thức chính quy này yêu cầu chuỗi phải:
        - Bắt đầu với 3 đến 6 ký tự chữ cái (viết hoa hoặc viết thường) (`^[a-zA-Z]{3,6}`).
        - Tiếp theo có thể chứa bất kỳ ký tự chữ cái (viết hoa hoặc viết thường), số hoặc dấu gạch dưới 
        và có độ dài từ 5 đến 31 ký tự (`[a-zA-Z0-9_]{5,31}$`).
    Với biểu thức này, chuỗi phải bắt đầu bằng 3 đến 6 chữ cái và sau đó có từ 5 đến 31 ký tự chữ cái,
    số hoặc dấu gạch dưới.
    */
    /*Khái niêm về dấu "$" trong biểu thức chính quy: 
    Dấu "$"" được gọi là "kết thúc chuỗi" (end of string anchor). 
    Khi đặt ở cuối của biểu thức chính quy, dấu $ chỉ ra rằng Mẫu phải kết thúc tại vị trí cuối cùng 
    của chuỗi văn bản.
    ₫₫₫₫Lưu ý: Dấu $ không nhất thiết phải đi chung với lượng từ trong biểu thức chính quy. 
    Dấu $ thường được sử dụng để chỉ định rằng mẫu phải kết thúc tại vị trí cuối cùng của chuỗi, 
    không có ký tự nào khác được phép xuất hiện sau vị trí kết thúc đó.
    */

/*Thấy khó hiểu quá thì xem các khái niệm ở trên trước thì hãy xem các lệnh thuộc sự kiện bên dưới
Lời khuyên là nên xem trước các khải niệm để tránh nhầm lẫn thuật ngữ
( đặc biệt là "Mẫu Biểu thức chính quy" và "Biểu thức chính quy"
và cách hoạt động( đặc biệt là của dấu "^" và "Lượng từ" cùng với dấu "$")
Nói chung là cái phần này nhìn thì dễ nhưng mà là dễ nhầm lẫn tên gọi và cách hoạt động*/
/*Ta có thể viết cả phần kiếm tra tên đăng nhập và cả mật khẩu vào chung 1 hàm sự kiện thôi cũng được
Tức viết chung vào cái này:
    document.getElementById("khungDangNhap").addEventListener("submit", function(sukienSubmit) {...}
Và đó là cách người ta thường làm. Nhưng đây là lần đầu ta học nên tách ra sẽ dễ giải thích và trông
dễ hiểu hơn.
Nhưng khi viết chung lại thì làm ơn chỉnh lại tên biến của 1 trong 2 điều kiện kiểm tra.
Vì chúng bị trùng nhau cái tên là "quyTacDK". '
Điều tương tụ cũng xảy ra với biến chứa "viTrithongBaoError". Thật ra bây giờ ta đặt tên khác cũng được
Nhưng vì ở đây ta tách riêng ra 2 hàm sự kiện nên ta cứ viết vậy cho nó ngắn gọn hơn.
Phần đăng ký ta sẽ gôm chung lại để viết cho gọn. Do ta đã được làm quen ở phần đăng nhập rồi nên
đăng ký gôm lại cho nhanh.
*/
document.getElementById("khungDangNhap").addEventListener("submit", function(sukienSubmit) {
    const chuoiTenDangNhap = document.getElementById("tenDangNhap").value;
    const viTrithongBaoError = document.getElementById("tenDangNhapError");
    const MauDieuKien = /^[a-zA-Z][a-zA-Z0-9_]{5,31}$/; 
    //Điều kiện: bắt đầu bằng chữ cái, từ 6-32 ký tự, chỉ chứa chữ cái, số và dấu gạch dưới
    //Giải thích Biểu thức chính quy: /^[a-zA-Z][a-zA-Z0-9_]{5,31}$/
        //  ^[a-zA-Z]
        //Dấu "^" bắt buộc chuỗi người dùng nhập phải bắt đầu bằng "Biểu thức chỉnh quy"( regular expressions) 
        //ở phía sau và nằm nhất so với ký tự "^".
        //=>Áp dụng dấu "^" cho biểu thức chính quy [a-zA-Z]. 
        //Tức Ký tự bắt đầu bắt buộc là chữ thường hoặc chữ hoa.
        //  [a-zA-Z0-9_]{5,31}
        //Được sử dụng để chỉ định số lần xuất hiện của "Biểu thức chính quy" nằm ngay trước 
        //và nằm gần nhất so với "Lượng từ".
        //Trong trường hợp này, nó chỉ định biểu thức chính quy [a-zA-Z0-9_]
        //( chứa các ký tự chữ cái, số hoặc dấu gạch dưới)
        //Vậy [a-zA-Z0-9_] cần phải xuất hiện ít nhất 5 lần và không quá 31 lần trong chuỗi.
        //Còn [a-z] do không có "Lượng từ" nên lượng từ mặc định là 1 lần.
        //=>Vậy tính chung all điều kiện của "Mẫu" thì ta sẽ phải nhập số lượng ký tự từ 6 đến 32.

    if (!MauDieuKien.test(chuoiTenDangNhap)) {
        viTrithongBaoError.textContent = "Tên đăng nhập phải có từ 6 đến 32 ký tự và bắt đầu bằng 1 ký tự chữ cái. Không dùng ký tự đặc biệt, được dùng dấu gạch chân.";
        sukienSubmit.preventDefault(); // Ngăn chặn việc submit form
    }
    else {
        viTrithongBaoError.textContent = ""; // Xóa thông báo lỗi nếu tên đăng nhập hợp lệ
    }
});


document.getElementById("khungDangNhap").addEventListener("submit", function(sukienSubmit) {
    const chuoiMatKhau = document.getElementById("matKhauDangNhap").value;
    const viTrithongBaoError = document.getElementById("matKhauError");
    const MauDieuKien = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/; 
    //Điều kiện: từ 6-20 ký tự, ít nhất 1 chữ cái viết hoa, ít nhất 1 chữ cái thường, ít nhất 1 số.
    //Giải thích biểu thức chính quy: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/
        //^...[a-zA-Z\d]
        //Dấu "^" bắt buộc chuỗi người dùng nhập phải bắt đầu bằng "Biểu thức chỉnh quy"( regular expressions) 
        //ở phía sau và nằm nhất so với ký tự "^".
        //=>Áp dụng dấu "^" cho biểu thức chính quy [a-zA-Z\d]. 
        //Tức Ký tự bắt đầu bắt buộc là chữ thường, chữ hoa hoặc số.
        //{6,20}
        //=>Áp dụng {6,20} cho biểu thức chính quy [a-zA-Z\d] đã nói trên
        //Tức số lần xuất hiện của các ký tự thỏa [a-zA-Z\d] sẽ bắt buộc từ 6 đến 20 lần.
        //Và do không có bắt kỳ "Biểu thức chính quy" nào khác nữa.
        //Vậy nên "Mẫu" ở đây sẽ phải nhập số lượng ký tự từ 6 đến 20.
        //Còn lại là 3 "Positive lookahead"( "Tìm kiếm xuôi tích cực")
            //- `(?=.*[a-z])` kiểm tra xem chuỗi có chứa ít nhất một ký tự viết thường hay không.
            //- `(?=.*[A-Z])` kiểm tra xem chuỗi có chứa ít nhất một ký tự viết hoa hay không.
            //- `(?=.*\d)` kiểm tra xem chuỗi có chứa ít nhất một chữ số hay không.
        //=>Chuỗi phải chứa ít nhất một ký tự viết thường, ít nhất một ký tự viết hoa 
        //và ít nhất một chữ số.
    

    if (!MauDieuKien.test(chuoiMatKhau)) {
        viTrithongBaoError.textContent = "Mật khẩu phải có từ 6 đến 20 ký tự, ít nhất 1 chữ cái viết hoa, ít nhất 1 chữ cái thường và ít nhất 1 số. Không dùng ký tự đặc biệt.";
        sukienSubmit.preventDefault(); // Ngăn chặn việc submit form
    } 
    else {
        viTrithongBaoError.textContent = ""; // Xóa thông báo lỗi nếu mật khẩu hợp lệ
    }
});


/*Chức năng: Ẩn hiện chuỗi mật khẩu ở mục [Mật khẩu] trong phần Đăng nhập*/
//Khi người dùng nhấp vào phần tử này, 
//mã sẽ kiểm tra loại của trường nhập mật khẩu có id là "matKhauDangNhap"
document.getElementById("anHienMatKhau").addEventListener("click", function() {
    const inputMatKhau = document.getElementById("matKhauDangNhap");
    if (inputMatKhau.type === "password") { 
        inputMatKhau.type = "text";
        this.innerHTML = '<i class="fas fa-eye"></i>';
    } 
    /*Nếu loại của trường nhập này là "password", tức là đang ẩn mật khẩu, 
    mã sẽ thay đổi loại của trường nhập thành "text" để hiển thị mật khẩu.
    Đồng thời thay đổi nội dung bên trong thẻ gắn id "anHienMatKhau"
    thành biểu tượng con mắt mở.
    */
    else {
        inputMatKhau.type = "password";
        this.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
     /*Nếu loại của trường nhập này không phải là "password"( tức là "text"), tức là đang ẩn mật khẩu, 
    mã sẽ thay đổi loại của trường nhập thành "password" để ẩn mật khẩu 
    Đồng thời thay đổi nội dung bên trong thẻ gắn id "anHienMatKhau"
    thành biểu tượng con mắt đóng.
    */
});
////####END




////####Phần ĐĂNG KÝ
document.getElementById("khungDangKy").addEventListener("submit", function(sukienSubmit){
    const chuoiTenDangKy = document.getElementById("tenDangKy").value;
    const viTrithongBaoErrorTenDangKy = document.getElementById("tenDangKyError");
    const MauDieuKienTenDangKy = /^[a-zA-Z][a-zA-Z0-9_]{5,31}$/; 
    //Điều kiện: bắt đầu bằng chữ cái, từ 6-32 ký tự, chỉ chứa chữ cái, số và dấu gạch dưới
    //Giải thích Biểu thức chính quy: /^[a-zA-Z][a-zA-Z0-9_]{5,31}$/
        //  ^[a-zA-Z]
        //Dấu "^" bắt buộc chuỗi người dùng nhập phải bắt đầu bằng "Biểu thức chỉnh quy"( regular expressions) 
        //ở phía sau và nằm nhất so với ký tự "^".
        //=>Áp dụng dấu "^" cho biểu thức chính quy [a-zA-Z]. 
        //Tức Ký tự bắt đầu bắt buộc là chữ thường hoặc chữ hoa.
        //  [a-zA-Z0-9_]{5,31}
        //Được sử dụng để chỉ định số lần xuất hiện của "Biểu thức chính quy" nằm ngay trước 
        //và nằm gần nhất so với "Lượng từ".
        //Trong trường hợp này, nó chỉ định biểu thức chính quy [a-zA-Z0-9_]
        //( chứa các ký tự chữ cái, số hoặc dấu gạch dưới)
        //Vậy [a-zA-Z0-9_] cần phải xuất hiện ít nhất 5 lần và không quá 31 lần trong chuỗi.
        //Còn [a-z] do không có "Lượng từ" nên lượng từ mặc định là 1 lần.
        //=>Vậy tính chung all điều kiện của "Mẫu" thì ta sẽ phải nhập số lượng ký tự từ 6 đến 32.

    if (!MauDieuKienTenDangKy.test(chuoiTenDangKy)) {
        viTrithongBaoErrorTenDangKy.textContent = "Tên đăng nhập phải có từ 6 đến 32 ký tự và bắt đầu bằng 1 ký tự chữ cái. Không dùng ký tự đặc biệt, được dùng dấu gạch chân.";
        sukienSubmit.preventDefault(); // Ngăn chặn việc submit form
    } 
    else {
        viTrithongBaoErrorTenDangKy.textContent = ""; // Xóa thông báo lỗi nếu tên đăng nhập hợp lệ
    }


    const chuoiMKDangKy = document.getElementById("matKhauDangKy").value;
    const viTrithongBaoErrorMKDangKy = document.getElementById("matKhauDangKyError");
    const MauDieuKienMKDangKy = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/;

    const chuoiXacNhanMKDangKy = document.getElementById("xacNhanMKDangKy").value;
    const viTrithongBaoErrorXacNhanMKDangKy = document.getElementById("xacNhanMKDangKyError");
    /*Khai báo biến lưu chuỗi và vị trí ở mục [Xác nhận mật khẩu] ở ngoài này thay vì ở lệnh Else lớn
    ngay bên dưới
    Vì dù gì thì đường nào cũng sử dụng 2 biến này thôi( tức "chuoiXacNhanMKDangKy" 
    và "viTrithongBaoErrorXacNhanMKDangKy"). 
    &&&&Lí do quan trọng hơn là vì để sử dụng được lệnh gán này:
        viTrithongBaoErrorXacNhanMKDangKy.textContent = "";
    Còn nếu ta khai báo bên trong lệnh Else lớn thì 2 biến nói trên chỉ có thể được dùng trong 
    lệnh Else lớn và các lệnh bên trong nó thôi.
    Và lệnh gán [viTrithongBaoErrorXacNhanMKDangKy.textContent = "";] này lại nằm ở lệnh If lớn
    Nên lệnh gán này sẽ bị lỗi vì lí do hiển nhiên là vì biến "viTrithongBaoErrorXacNhanMKDangKy" 
    vẫn chưa tồn tại ở lệnh If lớn này.
    */

    if (!MauDieuKienMKDangKy.test(chuoiMKDangKy)) {
        viTrithongBaoErrorMKDangKy.textContent = "Mật khẩu phải có từ 6 đến 20 ký tự, ít nhất 1 chữ cái viết hoa, ít nhất 1 chữ cái thường và ít nhất 1 số. Không dùng ký tự đặc biệt.";
        sukienSubmit.preventDefault(); // Ngăn chặn việc submit form

        viTrithongBaoErrorXacNhanMKDangKy.textContent = ""; // Xóa thông báo lỗi nếu mật khẩu hợp lệ
        /*Cái này nhầm để xóa đi thông báo lỗi của mục [Xác nhận mật khẩu] khi rơi vào TH dưới đây:
        1. Đầu tiên thì ta nhập đúng thỏa Điều kiên Đặt khẩu ở mục [Đặt mật khẩu] rồi. 
        ××VD như đặt là "Ngohuuloc1"
        2. Sau đó ta nhập sai mật khẩu xác nhận ở mục [Xác nhận mật khẩu]
        ××VD như là "Ngohuutoan1" =>Hiện ra thông báo lỗi ở mục [Xác nhận mật khẩu]
        3. Sau đó thfi ta chỉnh mật khẩu đã thỏa mãn thành sai ở mục [Đặt mật khẩu]
        ××VD như là "Ngohuuloc" =>Hiện ra thông báo lỗi ở mục [Đặt mật khẩu] và xóa đi thông báo lỗi
        ở mục [Xác nhận mật khẩu]
        $$Câu hỏi hơi đắt giá: Thế sao không để mẹ 2 thông báo lỗi luôn đi??
        =>Vì mật khẩu ở mục [Đặt mật khẩu] đang không thỏa điều kiện đặt mật khẩu
        thì kiểm tra xác nhận mật khẩu làm con mẹ gì!
        */
    } 
    else {
        viTrithongBaoErrorMKDangKy.textContent = ""; // Xóa thông báo lỗi nếu mật khẩu hợp lệ


        if (chuoiXacNhanMKDangKy !== chuoiMKDangKy) {
            viTrithongBaoErrorXacNhanMKDangKy.textContent = "Mật khẩu không trùng khớp với mật khẩu phía trên.";
            sukienSubmit.preventDefault(); // Ngăn chặn việc submit form
        } 
        else {
            viTrithongBaoErrorXacNhanMKDangKy.textContent = ""; // Xóa thông báo lỗi nếu mật khẩu hợp lệ
        }
    }
});
/*Ở phần đăng ký thì nó hơi phức tạp hơn 1 chút. Là ở 2 chỗ mật khẩu. Cụ thể ý tưởng sẽ như sau:
Đầu tiên vẫn là so sánh chuỗi ở mục [Đặt mật khẩu]( tức mục mật khẩu thứ nhất) với Mẫu biểu thức chính quy
xem nó có thỏa không??
    -(Khối lệnh If)Nếu không thỏa thì nó sẽ hiện lên thông báo Error ở chỗ mục [Đặt mật khẩu]
    Và xóa đi thông báo Error ở mục [Xác nhận mật khẩu]
    ( việc xóa này nhầm phòng tránh rơi vào TH đặc biệt như đã giải thích ở phần khối lệnh if ngay trên)
    -(Khối lệnh Else)Nếu thỏa thì nó sẽ bỏ đi thông báo Error ở chỗ mục [Đặt mật khẩu]
    Đồng thời, đặc biệt ở đây nếu thỏa thì nó sẽ còn thực hiện thêm 1 chuỗi lệnh nữa
    để kiểm tra lại chuỗi ở mục [Xác nhận mật khẩu]( tức mục mật khẩu thứ 2)
    có giống chuỗi ở mục [Đặt mật khẩu] hay không??
        +( Khối lệnh If)Nếu không thì nó sẽ hiên lên thông báo Error ở chỗ mục [Xác nhận mật khẩu]
        +( Khối lệnh Else)Nếu thỏa thì nó sẽ bỏ đi thông báo Error ở chỗ mục [Đặt mật khẩu]
*/


/*2 phần dưới đây tương tư như phần "Ẩn hiện chuỗi mật khẩu ở mục [Mật khẩu] trong phần Đăng nhập"
chỉ khác ở vị trí ẩn hiện thôi.*/
/*Chức năng: Ẩn hiện chuỗi mật khẩu ở mục [Đặt mật khẩu] trong phần Đăng ký*/
document.getElementById("anHienMKDangKy").addEventListener("click", function() {
    const inputMatKhau = document.getElementById("matKhauDangKy");
    if (inputMatKhau.type === "password") { 
        inputMatKhau.type = "text";
        this.innerHTML = '<i class="fas fa-eye"></i>';
    } 
    else {
        inputMatKhau.type = "password";
        this.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
});
/*Chức năng: Ẩn hiện chuỗi mật khẩu ở mục [Xác nhận mật khẩu] trong phần Đăng ký*/
document.getElementById("anHienXacNhanMKDangKy").addEventListener("click", function() {
    const inputMatKhau = document.getElementById("xacNhanMKDangKy");
    if (inputMatKhau.type === "password") { 
        inputMatKhau.type = "text";
        this.innerHTML = '<i class="fas fa-eye"></i>';
    } 
    else {
        inputMatKhau.type = "password";
        this.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
});
////####END










