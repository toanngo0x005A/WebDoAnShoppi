//Do TH này là khi nhấp vào nút "Mua ngay" hay nút "Mua" thì không chỉ chuyển trang
//Mà nó còn gửi các giá trị về sever để xử lý nữa
//Nên nó phải nằm trong thẻ <form> để có thể gửi được dữ liêu về sever. 
//Mà nếu liên kết thẻ <aL> nằm trong thẻ <form> thì thẻ <a> không thể chuyển hướng trang khi được nhấn. 
//Vì khi bạn nhấn vào liên kết, trình duyệt thường sẽ chỉ gửi biểu mẫu (form) 
//thay vì chuyển hướng trang đến địa chỉ được xác định trong thuộc tính href của thẻ <a>.
//××VD: 
//<form class="muaNgay">
//    <p class="text-center">Mã 001</p>
//    <a href="../carts/index.html">
//        <button>
//            <i class="fa-solid fa-cart-shopping"></i> Mua ngay
//        </button>
//    </a>
//</form>
//Giải thích: Mã như sau sẽ không thể chuyển sang trang Thanh Toán mà heft của thẻ <a> đang chỉ được.
//Vì thẻ <a> nằm trong thẻ <form> sẽ không thể chuyển hướng trang được. Tức có thể hiểu
//Khi thẻ <a> nằm trong thẻ <form> thì khả năng thẻ <a> sẽ bị vô hiệu.

//Tuy nhiên, nếu bạn muốn một liên kết có thể chuyển hướng trang, bạn có thể sử dụng JavaScript
//để ngăn chặn sự kiện mặc định của liên kết và chuyển hướng trang theo ý muốn của bạn.
//Hoặc sử dụng thẻ button thay vì thẻ a như sau( cách này được khuyên dùng và thường được dùng):
//<form class="muaNgay">
//  <p class="text-center">Mã 001</p>
//  <button type="button" onclick="chuyenTrangThanhToan()">
//      <i class="fa-solid fa-cart-shopping"></i> Mua Ngay
//  </button>
//</form>
//Sau đó sử dụng thêm javaScipt như sau:
function chuyenTrangThanhToan1(){
    // Địa chỉ URL của trang mua ngay
    const gioHangURL1 = "carts/shopping-cart.html";
    // Chuyển hướng trang
    window.location.href = gioHangURL1;
}
/*₫₫₫₫Chú ý: Đề kêu phải chuyển sang máy khác để test lỗi
nên ta bắt buộc phải dùng đường dẵn tương đối để chuyển đổi trang
Vì thế khi ta xài hàm chuyenTrangThanhToan() trên cho các trang không cùng nằm trực tiếp ngay bên trong
folder "users" thì ta không thể xài được hàm này. Do đường dẵn tương đối "carts/index.html"
chỉ có thể chỉ đúng khi file trang html nằm trực tiếp bên trong folder "users" thôi.
VD như trang chủ dùng được do nó nằm ngay bên trong folder "users"
Còn các trang khac như trang chi tiết, trang giỏ hàng,.. thì không
Mặc dù chúng vẫn nằm trong folder "users" nhưng nó phải nằm trực tiếp bên trong cơ
như trang chi tiết thì lại nằm trực tiếp trong folder "productDetails" và gián tiếp trong folder "users"
còn trang giỏ hàng lịa nằm trực tiếp trong foldr "carts" và gián tiêp trong folder "users".
*/

//Thế nên ta đành phải làm thêm 1 hàm Chuyển sang trang thanh toán cho Trang Chi Tiết
function chuyenTrangThanhToan2(){
    // Địa chỉ URL của trang mua ngay
    const gioHangURL1 = "../carts/shopping-cart.html";
    // Chuyển hướng trang
    window.location.href = gioHangURL1;
}



