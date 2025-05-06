// header nav-icon
  const navIcon = document.querySelector('.nav-icon i');

        navIcon.addEventListener('click', () => {
            // Kiểm tra nếu biểu tượng là "fa-bars"
            if (navIcon.classList.contains('fa-bars')) {
    navIcon.classList.replace('fa-bars', 'fa-times'); // Chuyển thành dấu X
            } else {
    navIcon.classList.replace('fa-times', 'fa-bars'); // Chuyển về biểu tượng thanh ngang
            }
        });
// nav-icon active
        $(document).ready(function () {
            $('.nav-icon').click(function () {
                $('.header-menu').toggleClass('active');
            });
        });







$('#list-product').slick({
  dots: false,               // Ẩn dấu chấm điều hướng
  infinite: true,            // Vòng lặp vô hạn
  speed: 300,                // Tốc độ chuyển slide (ms)
  slidesToShow: 4,           // Hiển thị 4 sản phẩm cùng lúc
  slidesToScroll: 1,         // Cuộn 1 sản phẩm mỗi lần
  autoplay: true,            // Tự động chuyển slide
  autoplaySpeed: 1000,       // Thời gian chuyển slide tự động (2 giây)
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,     // Hiển thị 3 sản phẩm với màn hình nhỏ hơn 1024px
        slidesToScroll: 3,   // Cuộn 3 sản phẩm mỗi lần
        infinite: true,      // Vòng lặp vô hạn
        dots: true           // Hiển thị dấu chấm điều hướng cho màn hình nhỏ
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,     // Hiển thị 2 sản phẩm với màn hình nhỏ hơn 600px
        slidesToScroll: 2    // Cuộn 2 sản phẩm mỗi lần
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,     // Hiển thị 1 sản phẩm với màn hình nhỏ hơn 480px
        slidesToScroll: 1    // Cuộn 1 sản phẩm mỗi lần
      }
    }
  ]
});

// 
$('#list-product  .slick-arrow').html("");
$('#list-product  .slick-arrow.slick-next').html("<span>></span>");
$('#list-product  .slick-arrow.slick-prev').html("<span><</span>");
$('#list-product  .slick-arrow.slick-prev').html("<span><</span>");
$(document).ready(function () {
  $('#lists-doi-tac').slick({
    dots: false,                // Ẩn các dấu chấm điều hướng
    infinite: true,             // Vòng lặp vô hạn
    speed: 300,                 // Tốc độ chuyển đổi (300ms)
    slidesToShow: 6,            // Hiển thị 7 đối tác cùng lúc
    slidesToScroll: 1,          // Cuộn 1 logo mỗi lần
    autoplay: true,             // Tự động lướt
    autoplaySpeed: 1000,        // Chuyển mỗi 1 giây
    arrows: Animation,               // Hiển thị mũi tên điều hướng
    responsive: [
      {
        breakpoint: 1024,       // Với màn hình nhỏ hơn 1024px
        settings: {
          slidesToShow: 3,      // Hiển thị 3 đối tác
          slidesToScroll: 1     // Cuộn 1 logo mỗi lần
        }
      },
      {
        breakpoint: 600,        // Với màn hình nhỏ hơn 600px
        settings: {
          slidesToShow: 2,      // Hiển thị 2 đối tác
          slidesToScroll: 1     // Cuộn 1 logo mỗi lần
        }
      },
      {
        breakpoint: 480,        // Với màn hình nhỏ hơn 480px
        settings: {
          slidesToShow: 1,      // Hiển thị 1 đối tác
          slidesToScroll: 1     // Cuộn 1 logo mỗi lần
        }
      }
    ]
  });
});


        //   Systax => $(selector).event(khối lệnh)
        $(".errorhoTen").hide();
        $(".errorEmail").hide();
        $(".errorSdt").hide();
        $(".errornoiDung").hide();
        $("button").click(function (event) {
            // không chuyển trang
            event.preventDefault();
            // lấy value của thẻ HTML có id là userName
            var hoTen = $("#hoTen").val();
            // lấy value của thẻ HTML có id là password
            var Email = $("#Email").val();
            var Sdt = $("#Sdt").val();
            var noiDung = $("#noiDung").val();
            if (hoTen == null || hoTen == "") {
                // thêm class
                // $(".errorUser").addClass("active");
                //  style cho  các thẻ chứ class errorUser
                // $(".errorUser").css("color","red")
                // sử dụng hiệu ứng trong jquery
                $(".errorhoTen").show();

            } else {
                $(".errorhoTen").hide();
            }
            if (Email == null || Email == "") {
                // sử dụng hiệu ứng trong jquery
                $(".errorEmail").show();
            }
            else {
                $(".errorEmail").hide();
            }
            if (Sdt == null || Sdt == "") {
                // sử dụng hiệu ứng trong jquery
                $(".errorSdt").show();
            }
            else {
                $(".errorSdt").hide();
            }
            if (noiDung == null || noiDung == "") {
                // sử dụng hiệu ứng trong jquery
                $(".errornoiDung").show();
            }
            else {
                $(".errornoiDung").hide();
            }
        });
   