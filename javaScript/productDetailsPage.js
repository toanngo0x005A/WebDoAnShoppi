/*$$$$Câu hỏi đắt giá 1: Có nên thay đổi tên của đối tượng document trong javaScript không??
    Việc sử dụng tên "document" là một quy ước phổ biến và rõ ràng trong cộng đồng 
lập trình viên JavaScript và nó cung cấp một sự nhất quán và dễ hiểu trong mã của bạn.
    Tuy nhiên, nếu bạn cảm thấy cần thiết để đổi tên document thành một tên khác để phù hợp với quy ước 
đặt tên trong dự án của bạn hoặc để làm cho mã của bạn dễ đọc hơn, bạn có thể thay đổi nó. 
Điều quan trọng là chọn một tên mới mà không gây nhầm lẫn và vẫn diễn đạt được 
mục đích của đối tượng document.
    Tuy nhiên, hãy nhớ rằng việc thay đổi tên của một đối tượng quan trọng như document có thể làm cho 
mã của bạn khó hiểu đối với các lập trình viên khác trong dự án hoặc người mới đọc mã của bạn. 
Nếu bạn quyết định thay đổi tên, hãy đảm bảo rằng bạn có thời gian và lý do cụ thể 
cho quyết định của mình, và ghi chú về sự thay đổi trong mã hoặc tài liệu của dự án của bạn.
==>>Việc thay đổi tên của đối tượng document không phải là một thực hành được khuyến khích 
trong lập trình JavaScript. Sử dụng tên document là một quy ước phổ biến và rõ ràng trong 
cộng đồng lập trình viên JavaScript, và nó cung cấp một sự nhất quán và dễ hiểu trong mã của bạn.
*/



/*Chức năng chính: Hàm capNhatProductImage này được thiết kế để thay đổi hình ảnh sản phẩm dựa trên 
màu sắc được chọn. Đầu vào của hàm là một chuỗi chữ mô tả màu sắc( tức "pink", "black", "blue",...) 
của sản phẩm (mauSP), và sau đó hàm này sẽ thay đổi đường dẫn của các hình ảnh sản phẩm 
tương ứng với màu sắc đó.*/
function capNhatProductImage(mauSP) {
    const thayDoiMauSac1 = document.getElementById('productImg1');
    const thayDoiMauSac2 = document.getElementById('productImg2');
    const thayDoiMauSac3 = document.getElementById('productImg3');
    const thayDoiMauSac4 = document.getElementById('productImg4');
    const thayDoiMauSac5 = document.getElementById('productImg5');
    const thayDoiMauSac6 = document.getElementById('productImg6');
    //Cấu trúc lệnh rẽ nhánh switch trong JavaScript tương tự như trong C++ 
    //Ở đây ta dùng nó để tùy chỉnh đường dẫn hình ảnh của sản phẩm dựa trên màu sắc được chọn
    switch (mauSP) {
        case 'pink':
            thayDoiMauSac1.src = 'imgs/ChiTietSP/iphone13/iphone13Pink/iphone13Pink1.jpg';
            thayDoiMauSac2.src = 'imgs/ChiTietSP/iphone13/iphone13Pink/iphone13Pink2.jpg';
            thayDoiMauSac3.src = 'imgs/ChiTietSP/iphone13/iphone13Pink/iphone13Pink3.jpg';
            thayDoiMauSac4.src = 'imgs/ChiTietSP/iphone13/iphone13Pink/iphone13Pink4.jpg';
            thayDoiMauSac5.src = 'imgs/ChiTietSP/iphone13/iphone13Pink/iphone13Pink5.jpg';
            thayDoiMauSac6.src = 'imgs/ChiTietSP/iphone13/iphone13Pink/iphone13Pink6.jpg';
            break;
        case 'green':
            thayDoiMauSac1.src = 'imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green1.jpg';
            thayDoiMauSac2.src = 'imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green2.jpg';
            thayDoiMauSac3.src = 'imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green3.jpg';
            thayDoiMauSac4.src = 'imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green4.jpg';
            thayDoiMauSac5.src = 'imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green5.jpg';
            thayDoiMauSac6.src = 'imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green6.jpg';
            break;
        case 'black':
            thayDoiMauSac1.src = 'imgs/ChiTietSP/iphone13/iphone13Black/iphone13Black1.jpg';
            thayDoiMauSac2.src = 'imgs/ChiTietSP/iphone13/iphone13Black/iphone13Black2.jpg';
            thayDoiMauSac3.src = 'imgs/ChiTietSP/iphone13/iphone13Black/iphone13Black3.jpg';
            thayDoiMauSac4.src = 'imgs/ChiTietSP/iphone13/iphone13Black/iphone13Black4.jpg';
            thayDoiMauSac5.src = 'imgs/ChiTietSP/iphone13/iphone13Black/iphone13Black5.jpg';
            thayDoiMauSac6.src = 'imgs/ChiTietSP/iphone13/iphone13Black/iphone13Black6.jpg';
            break;
        case 'white':
            thayDoiMauSac1.src = 'imgs/ChiTietSP/iphone13/iphone13White/iphone13White1.jpg';
            thayDoiMauSac2.src = 'imgs/ChiTietSP/iphone13/iphone13White/iphone13White2.jpg';
            thayDoiMauSac3.src = 'imgs/ChiTietSP/iphone13/iphone13White/iphone13White3.jpg';
            thayDoiMauSac4.src = 'imgs/ChiTietSP/iphone13/iphone13White/iphone13White4.jpg';
            thayDoiMauSac5.src = 'imgs/ChiTietSP/iphone13/iphone13White/iphone13White5.jpg';
            thayDoiMauSac6.src = 'imgs/ChiTietSP/iphone13/iphone13White/iphone13White6.jpg';
            break;
        default:
            thayDoiMauSac1.src = 'imgs/ChiTietSP/iphone13/iphone13Blue/iphone13Blue1.jpg';
            thayDoiMauSac2.src = 'imgs/ChiTietSP/iphone13/iphone13Blue/iphone13Blue2.jpg';
            thayDoiMauSac3.src = 'imgs/ChiTietSP/iphone13/iphone13Blue/iphone13Blue3.jpg';
            thayDoiMauSac4.src = 'imgs/ChiTietSP/iphone13/iphone13Blue/iphone13Blue4.jpg';
            thayDoiMauSac5.src = 'imgs/ChiTietSP/iphone13/iphone13Blue/iphone13Blue5.jpg';
            thayDoiMauSac6.src = 'imgs/ChiTietSP/iphone13/iphone13Blue/iphone13Blue6.jpg';
            break;
    }
}





/*₫₫₫₫Siêu Chú ý: Ta phải cần thận sắp xếp mã html sao cho rõ ràng, cũng như phải chỉ cụ rõ ràng nội dung
cần duyệt( tức địa chỉ cần duyệt), nhất là khi ta sử dụng phương thức ".each()" trong jQuery.
Vì nếu không cẩn thận ta có thể bị lỗi duyệt thừa giá trị cần duyệt dẵn tới việc lỗi mà ta không biết là 
sai ở đâu( do nó không phải lỗi cú pháp). Lỗi có thể là do đường dẵn ta chỉ định cho phương thức .each()
( tức $('#MucHienThiImgPhongTo .carousel-inner').empty();, chỉ là vd thôi chứ mã này không sai)
Hoặc thậm chí khó hơn là lỗi sắp xếp mã html không rõ ràng dẵn tới duyệt thừa, thiếu hay không duyệt được
là việc thường thấy.
Ở đây ta đã bị lỗi do không chỉ định rõ ràng địa chỉ cần duyệt
cụ thể là ta đã chỉ định $('.carousel-item').each(index){...} thay vì
rõ ràng như $('#anhSanPhamMain .carousel-item').each(index){...}
Dẵn tới việc nó duyẹt dư các thẻ chứa .carousel-item mà không nằm trong thẻ gắn id "anhSanPhamMain"
Cuối cùng dẵn tới viẹc dư thừa ảnh truyền vào modal phóng to ảnh.
**Xem thêm lỗi này ta cũng đã gặp ở hàm tinhToanGiaTienSP() 
trong filde "cartsPage,js" ở trong folder "shoppi"**

@@@@Khái niệm về phương thức ".each()": Phương thức .each() trong jQuery được sử dụng để lặp qua 
từng phần tử trong một bộ sưu tập phần tử và thực hiện một hàm cho mỗi phần tử đó.
Phương thức `.each()` trong jQuery được sử dụng để lặp qua từng phần tử trong một bộ sưu tập phần tử và thực hiện một hàm cho mỗi phần tử đó.
%%Cú pháp chung của phương thức `.each()` là:
```javascript
$(selector).each(function(index, element) {
    // Thực hiện hành động cho mỗi phần tử
});
```Trong đó:
    -`$(selector)`: Là một bộ lọc jQuery chọn ra tất cả các phần tử mà bạn muốn lặp qua.
    -`.each()`: Phương thức lặp qua từng phần tử trong bộ lọc đã chọn và thực thi một hàm cho mỗi phần tử.
    -`function(index, element)`: Là một hàm callback được gọi cho mỗi phần tử. Tham số `index` là vị trí 
    của phần tử trong bộ sưu tập (bắt đầu từ 0), và tham số `element` là phần tử cụ thể trong bộ sưu tập.
=>Phương thức `.each()` rất hữu ích khi bạn cần thực hiện một hành động cụ thể cho mỗi phần tử 
trong một danh sách, danh sách các phần tử DOM, hoặc một bộ sưu tập jQuery nào đó.
*/
$(document).ready(function(){
    //Ám chỉ hành động khi người dùng click vào hình ảnh nằm trong thẻ gắn id "anhSanPhamMain"
    //thì sẽ thực hiện các câu lệnh nằm phía trong hàm click này.
    $('#anhSanPhamMain img').click(function(){
        $('#MucHienThiImgPhongTo .carousel-inner').empty(); // Xóa nội dung cũ 
        //trong "modal hiển thị hình ảnh phóng to của sản phẩm khi ta click
        //( tức xóa all hình sản phẩm trước đó đã thêm vào modal, nếu trước đó ta đã click vào rồi) 
        //Nhằm để khi người dùng có thay đổi loại tùy chỉnh sản phẩm như màu sắc, kích cỡ,..
        //thì hình ảnh sản phẩm có thể sẽ thay đổi dựa vào các tùy chỉnh đó
        //Và việc xóa này sẽ giúp cập nhật lại hình ảnh sản phẩm hiện tại vào 
        //để giúp hiển thị chính xác hình ảnh loại sản phẩm mà ta click vào.
        //VD như khi ta đang ở màu đen thì khi click sẽ hiển thị phóng to hình sản phẩm màu đen
        //Sau đó ta chuyển sang màu hồng thì khi click sẽ hiển thị phóng to hình sản phẩm màu hồng
        //Ngoài ra, nó còn giúp các hỉnh ảnh sản phẩm bị xếp chồng lên nhau.
        //Tức là nếu lần đầu ta click vào thì sẽ được 7 hình ảnh sản phầm phóng to trong modal đúng không
        //Sau đó ta lại click thêm 1 lần nữa thì do 7 hình ảnh sản phẩm ban nãy không được xóa
        //Thế là ta có 14 hình ảnh sản phẩm phóng to trong modal luôn
        //( 7 hình lần click thứ 2 sẽ nằm ở phía sau 7 hình lần click đầu).
        
        //Phân tích thành phần câu lệnh: 
        //[$('#MucHienThiImgPhongTo .carousel-inner')]: Chọn phần tử có class là "carousel-inner" 
        //mà là một con của phần tử có id là MucHienThiImgPhongTo.
        //[empty()]: Phương thức này được gọi để xóa hoặc loại bỏ nội dung bên trong phần tử đã được chọn.
        //=>Trong trường hợp này, nội dung của phần tử .carousel-inner sẽ được xóa đi, 
        //tức là tất cả các carousel-item (các hình ảnh) sẽ được loại bỏ, 
        //chuẩn bị cho việc thêm các hình ảnh mới vào carousel. 

        //Chức năng chính: Lặp qua các ảnh trong carousel-item thuộc thẻ gắn id "anhSanPhamMain"
        //và thêm chúng vào carousel trong modal
        $('#anhSanPhamMain .carousel-item').each(function(index){
            //Lấy đường dẵn hình ảnh sản phẩm hiện tại ở carousel-item đang được lặp qua.
            const duongDanImg = $(this).find('img').attr('src'); 
            //Xác định lớp 'active' cho phần tử đầu tiên trong một tập hợp. 
            //Để phần tử đầu tiên( tức hình đầu tiên) luôn được hiển thị trước tiên khi click vào hình ảnh sản phẩm
            const acctiveClassKtr = (index === 0) ? 'active' : ''; 

            //Tạo chuỗi HTML đại diện cho một carousel-item mới( tức carousel-item đang được lặp qua)
            const luuTruMaCodeImg = '<div class="carousel-item ' + acctiveClassKtr + '">' +
                                   '<img class="d-block w-100" src="' + duongDanImg + '" alt="...">' +
                               '</div>';
            //Thêm carousel-item mới vào trong carousel-inner của modal
            $('#MucHienThiImgPhongTo .carousel-inner').append(luuTruMaCodeImg);
        });
        //Giải thích chi tiết
        //$('#anhSanPhamMain .carousel-item').each(function(index){ ... })
        //Đây là một câu gọi hàm jQuer, cụ thể nó được gọi là hàm Callback. Cụ thể:
            //$('#anhSanPhamMain .carousel-item') là một câu lệnh jQuery để chọn tất cả các phần tử 
            //có lớp .carousel-item mà là con của phần tử có id là anhSanPhamMain.
            //.each(function(index) {...}) gọi phương thức each() của jQuery để lặp qua từng phần tử được chọn 
            //và thực thi một hàm callback cho mỗi phần tử. 
        //Hàm callback này nhận một tham số là index đại diện cho chỉ số của phần tử 
        //trong tập hợp các phần tử đã chọn.
        //Giải thích cách hoạt động
        //Duyệt qua mỗi phần tử có class là carousel-item nằm trong phần tử có id là "anhSanPhamMain"
        //Tức nó sẽ duyệt qua all các thẻ nào gắn class "carousel-item" ở trong thẻ gắn id "anhSanPhamMain"
        //cụ thể nó sẽ duyệt cái mã dưới đây này:
        //<div id="anhSanPhamMain" class="carousel-inner">
        //    <div class="carousel-item active">
        //        <img id="productImg1" src="imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green1.jpg" class="d-block w-100" alt="...">
        //    </div>
        //    <div class="carousel-item">
        //        <img id="productImg2" src="imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green2.jpg" class="d-block w-100" alt="...">
        //    </div>
        //    <div class="carousel-item">
        //        <img id="productImg3" src="imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green3.jpg" class="d-block w-100" alt="...">
        //    </div>
        //    <div class="carousel-item">
        //        <img id="productImg4" src="imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green4.jpg" class="d-block w-100" alt="...">
        //    </div>
        //    <div class="carousel-item">
        //        <img id="productImg5" src="imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green5.jpg" class="d-block w-100" alt="...">
        //    </div>
        //    <div class="carousel-item">
        //        <img id="productImg6" src="imgs/ChiTietSP/iphone13/iphone13Green/iphone13Green6.jpg" class="d-block w-100" alt="...">
        //    </div>
        //    <div class="carousel-item">
        //        <img src="imgs/ChiTietSP/iphone13/iphone13ThongTinChung.jpg" class="d-block w-100" alt="...">
        //    </div>
        //</div>
        //Đối với mỗi phần tử này, thực hiện một hàm callback với tham số là chỉ số của phần tử trong danh sách.

        //const duongDanImg = $(this).find('img').attr('src'); 
        //có chức năng là trích xuất đường dẫn của hình ảnh trong mỗi phần tử .carousel-item. 
        //Cụ thể: Biến 'duongDanImg' sẽ lưu giữ đường dẵn hình ảnh sản phầm 
        //ở [carousel-item thuộc thẻ gắn id "anhSanPhamMain"] hiện tại đang được lặp.
            //$(this) đại diện cho phần tử .carousel-item hiện tại mà each() đang lặp qua.
            //.find('img') được sử dụng để tìm các phần tử hình ảnh con bên trong .carousel-item.
            //.attr('src') là phương thức để trích xuất giá trị của thuộc tính src từ phần tử hình ảnh đó.
        //=>Giúp trích xuất và lưu trữ đường dẫn của hình ảnh trong mỗi phần tử .carousel-item, 
        //để sau đó có thể sử dụng đường dẫn đó để tạo các phần tử carousel-item mới trong modal.
 
        //const acctiveClassKtr = (index === 0) ? 'active' : '';
        //Biến 'acctiveClassKtr' sẽ lưu giữ giá trị 'active' nếu index === 0, 
        //và sẽ là một chuỗi rỗng '' trong các trường hợp khác. 
        //=>Dùng để xác định lớp 'active' cho phần tử đầu tiên trong một tập hợp.
        //Đây cũng là lí do tại sao khi click vào hình sản phẩm thì hình ảnh phóng to được hiển thị
        //trước tiên trong modal luôn là hình ảnh ở slide đầu tiên.
        //Nên nếu muốn ta cũng có thể đổi hình ảnh phóng to được hiển thị trước tiên khác
        //bằng cách thay đổi so sanh index với giá trị khác
        //××VD như "index === 1" thì sẽ là hình 2, còn "index == 4" sẽ là hình thứ 5,...


        //const luuTruMaCodeImg = '<div class="carousel-item ' + acctiveClassKtr + '">' +
        //                          '<img class="d-block w-100" src="' + duongDanImg + '" alt="...">' +
        //                    '</div>';
        //Phân tích từng mã lệnh:
            //Tạo biến "luuTruMaCodeImg" nhằm để nó lưu trữ mã HTML của 
            //thẻ gắn "carousel-item" đang được lặp qua.
            //Đầu tiên `'<div class="carousel-item ' + acctiveClassKtr + '">'`
            //Đây là phần mở đầu của  phần tử `<div>` đại diện cho một item trong carousel. 
            //Trong đó, biến `acctiveClassKtr` chứa giá trị lớp CSS 'active' nếu `index === 0`, 
            //nếu không, nó sẽ là một chuỗi rỗng.
            //Điều này giúp xác định xem phần tử đó có được đánh dấu là 'active' hay không.
  
            //Tiếp theo, `'<img class="d-block w-100" src="' + duongDanImg + '" alt="...">'` 
            //Đây là một thẻ `<img>` chứa hình ảnh được hiển thị trong carousel. 
            //Trong đó:
                //Thuộc tính `src` của thẻ `<img>` được thiết lập thành đường dẫn hình ảnh `duongDanImg`, 
                //mà như đã nói trên đây là đường dẵn hình ảnh sản phẩm ở carousel-item đang được lặp.
                //Thuộc tính `alt` thường được sử dụng để cung cấp một văn bản mô tả cho hình ảnh, 
                //nhưng ở đây có thể bỏ trống vì chúng ta không có thông tin mô tả cụ thể.

            //Cuối cùng, `'</div>'` chỉ đơn giản là thẻ <div> đóng thôi.

            //Tóm lại: Những mã này tạo ra một chuỗi HTML đại diện cho 
            //[carousel-item thuộc thẻ gắn id "anhSanPhamMain"] đang được chạy.
            //Sau đó gán chuỗi HTML nói trên cho biến "luuTruMaCodeImg" để lưu trữ. Cuối cùng nó sẽ được chèn 
            //vào cuối phần tử có lớp là carousel-inner trong phần tử có id là "MucHienThiImgPhongTo"
            //( nhờ vào câu lệnh kế tiếp, tức $('#MucHienThiImgPhongTo .carousel-inner').append(luuTruMaCodeImg);
            //tìm hiểu chi tiết câu lệnh này ở phía dưới).
            
            
            //$('#MucHienThiImgPhongTo .carousel-inner').append(luuTruMaCodeImg);
            //Dòng mã này sử dụng jQuery để chèn( chức năng của append()) nội dung của biến luuTruMaCodeImg 
            //vào cuối phần tử có lớp là carousel-inner trong phần tử có id là "MucHienThiImgPhongTo"
            //( tức lấy từ $('#MucHienThiImgPhongTo .carousel-inner'))
            //=>Điều này có nghĩa là nội dung của luuTruMaCodeImg sẽ được chèn vào 
            //cuối danh sách các phần tử con của .carousel-inner trong phần tử có id "MucHienThiImgPhongTo".

            //Khái niệm về hàm Phương thức `.append()` trong jQuery:
            //Được sử dụng để thêm nội dung mới vào cuối các phần tử đã chọn. 
            //Cụ thể, nó thêm nội dung được chỉ định vào cuối các phần tử đã chọn trong DOM.
            //Cú pháp cơ bản của `.append()` như sau:
            //```javascript
            //$(selector).append(content)
            //```
            //- `selector`: Định danh của phần tử hoặc phần tử được chọn mà bạn muốn 
            //thêm nội dung vào cuối.
            //- `content`: Nội dung mới được thêm vào cuối các phần tử đã chọn.
            //Khi `.append()` được gọi, nội dung được chỉ định sẽ được chèn vào cuối các phần tử đã chọn, 
            //mở rộng danh sách các phần tử đó nếu cần.
                           
            
        $('#PhongToImgModal').modal('show'); // Chỉ ez là Hiển thị modal phóng to hình ảnh thôi
        //Chức năng: hiển thị modal có id là "PhongToImgModal". 
        //Điều này sẽ kích hoạt hiển thị modal và làm nó xuất hiện trên màn hình.

    });
});
/*Tóm lại chức năng chung của mã Java trên( hay cụ thể hơn là mã Java dùng Jquery trên) là:
    Mã jQuery dưới đây thực hiện chức năng hiển thị hình ảnh phóng to của sản phẩm khi người dùng 
    click vào hình ảnh sản phẩm chính. 
    Cụ thể, nó cập nhật và hiển thị một modal chứa các hình ảnh của sản phẩm 
    Lí do ta cần cập nhật hình ảnh sản phẩm mỗi khi click là do
    khi chọn các tùy chỉnh sản phẩm thì hình ảnh sản phẩm sẽ thay đổi thế nên mỗi khi click vào hình sản
    phẩm hiện tại thì ta phải cập nhật lại hình ảnh sản phẩm ngay để nhét vào modal phóng to hình ảnh.
*/


document.getElementById('tangSL').addEventListener('click', function() {
    const dauNhapSL = document.getElementById('soLuongMua');  //Lấy đầu vào input có id "soLuongMua"
    let gtriSL = parseInt(dauNhapSL.value) || 0;    //Lấy giá trị của số lượng hiện tại từ biến dauNhapSL
    //( cụ thể là qua thuộc tính "value" của thẻ input gắn id "soLuongMua") 
    dauNhapSL.value = gtriSL + 1;
});

document.getElementById('giamSL').addEventListener('click', function() {
    const dauNhapSL = document.getElementById('soLuongMua');  //2 dòng này giống hệt
    let gtriSL = parseInt(dauNhapSL.value) || 0;            //2 dòng ở getElementById('tangSL')
    if (gtriSL > 1) {   //kt xem số lượng hiện tại đang là bao nhiêu. Nếu > 1 thì trừ đi được
                        //Ngược lại thì bỏ qua việc trừ đi( tức không trừ đi nữa vì đã là số 1 rồi)
        dauNhapSL.value = gtriSL - 1;
    }
});
//Đoạn mã JavaScript bạn đã cung cấp thực hiện chức năng tăng giảm giá trị của một input number \
//khi người dùng nhấn vào các nút tăng và giảm trên giao diện.
//Ở đoạn mã này, có hai sự kiện được đăng ký bằng phương thức `addEventListener`:
//1. Sự kiện click cho nút tăng:
//   - Khi người dùng nhấn vào nút tăng (có id là "tangSL"), một hàm được gọi.
//   - Trong hàm này, giá trị của dauNhapSL được lấy bằng cách truy cập element có id là "soLuongMua".
//   - Giá trị này được chuyển đổi thành số nguyên sử dụng hàm `parseInt`, nếu không thì mặc định là 0.
//   - Sau đó, giá trị của dauNhapSL được tăng lên 1 và gán lại vào dauNhapSL.

//2. Sự kiện click cho nút giảm:
//   - Tương tự như trên, khi người dùng nhấn vào nút giảm (có id là "decrease"), một hàm được gọi.
//   - Trong hàm này, giá trị của dauNhapSL cũng được lấy và chuyển đổi thành số nguyên.
//   - Nếu giá trị này lớn hơn 1, giá trị của dauNhapSL sẽ được giảm đi 1 và gán lại vào dauNhapSL.
//Mã này sử dụng JavaScript để tương tác với các phần tử HTML trên trang 
//và thay đổi giá trị của dauNhapSL dựa trên hành động của người dùng.






/*Hàm document.addEventListener('DOMContentLoaded', function() { ... }) được sử dụng để đăng ký một 
hàm callback để được gọi khi sự kiện "DOMContentLoaded" xảy ra trên tài liệu HTML. 
Sự kiện "DOMContentLoaded" xảy ra khi toàn bộ DOM của trang web đã được tải xong và được phân tích 
thành công bởi trình duyệt, ngay trước khi các hình ảnh và các tài nguyên khác 
(như các tập tin stylesheet và script) được tải xong.
 Về cơ bản, việc sử dụng document.addEventListener('DOMContentLoaded', function() { ... }) giúp đảm bảo 
rằng mã JavaScript trong hàm callback sẽ chỉ được thực thi sau khi toàn bộ DOM đã sẵn sàng để tương tác, \
điều này giúp tránh các vấn đề liên quan đến truy cập các phần tử DOM trước khi chúng đã được tạo.
=>Mã JavaScript trong document.addEventListener('DOMContentLoaded', function(){...} 
sẽ chỉ được thực thi khi toàn bộ DOM đã được tải xong
*/
document.addEventListener('DOMContentLoaded', function() {
    const danhsachSP = document.getElementById('MucSPLienQuan');
    const nutNextSP = danhsachSP.querySelector('.carousel-control-next');
    const nutPrevSP = danhsachSP.querySelector('.carousel-control-prev');

    danhsachSP.addEventListener('slid.bs.carousel', function() {
         // Kiểm tra nếu đang ở carousel-item đầu tiên
         if (danhsachSP.querySelector('.carousel-item:first-of-type').classList.contains('active')) {
            nutPrevSP.style.display = 'none'; // Ẩn nút prev
        } else {
            nutPrevSP.style.display = 'block'; // Hiện nút prev
        }

        // Kiểm tra nếu đang ở carousel-item cuối cùng
        if (danhsachSP.querySelector('.carousel-item:last-of-type').classList.contains('active')) {
            nutNextSP.style.display = 'none'; // Ẩn nút next
        } else {
            nutNextSP.style.display = 'block'; // Hiện nút next
        }
    });
});





