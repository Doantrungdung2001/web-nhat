let navbar = document.querySelector('.header .flex .navbar');
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   navbar.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   navbar.classList.remove('active');
}

function loader(){
   document.querySelector('.loader').style.display = 'none';
}

function fadeOut(){
   setInterval(loader, 2000);
}

window.onload = fadeOut;
// form feedback
function postToGoogle() {
   //Xử lý lấy dữ liệu các input vào biến tương ứng thông qua ID của input
   var name = $("#nameField").val();
   var number = $("#numberField").val();
   var email = $("#emailField").val();
   var feedback = $("#feedbackField").val();
   //Đoạn giữa này có thể sử dụng để validate dữ liệu 1 lần nữa hoăc... bỏ qua nhé :D

   //Xử lý gửi dữ liệu lên form
   $.ajax({
       //Chỉ định đích gửi dữ liệu đến: là form response đã tạo ở trên
       url: "https://docs.google.com/forms/d/e/1FAIpQLSestoPPakkA2OjlNsL2UdEQ8oJheWNgQlLriRNThz004ef2pg/formResponse?",
       //URL lấy từ link đã note ở trên nhé
       data: { //gán các giá trị tương ứng vào các Input name tương ứng đã lấy ở trên
           "entry.1583057517": name,
           "entry.422431813":number,
           "entry.730255120": email,
           "entry.870851846": feedback,
       },
       type: "POST",
       dataType: "jsonp", //các bạn có thể để xml, nhưng khi bật console lên sẽ thấy báo đỏ lòm vì ko cho cross, còn cái này nó vẫn cảnh báo nhưng màu xám thôi, ko đỏ :v
       success: function(d)
   {}, //do đã bảo ở trên là nó ko cho cross đâu, nên khi gửi data xong ko trả về success được, ko cần điền cái này nhé
       error: function(x, y, z) {
           $('#success-msg').show(); //hiện ra cái mess báo thành công khi gửi xong
       }
   });

   return false;
}



//form order
function postToGoogle() {
   //Xử lý lấy dữ liệu các input vào biến tương ứng thông qua ID của input
   var name_order = $("#nameorder").val();
   var telephone_order = $("#telephoneorder").val();
   var email_order = $("#emailorder").val();
   var number_order = $("#numberorder").val();
   var datetime_order = $("#timerorder").val();
   var more = $("#more").val();
   //Đoạn giữa này có thể sử dụng để validate dữ liệu 1 lần nữa hoăc... bỏ qua nhé :D

   //Xử lý gửi dữ liệu lên form
   $.ajax({
       //Chỉ định đích gửi dữ liệu đến: là form response đã tạo ở trên
       url: "https://docs.google.com/forms/d/e/1FAIpQLSeQ9WMcYdg-koabAUPrmjTBZJSiq1oM9rvzlNncoNlhU91Uvg/formResponse?",
       //URL lấy từ link đã note ở trên nhé
       data: { //gán các giá trị tương ứng vào các Input name tương ứng đã lấy ở trên
           "entry.1756426252": name_order,
           "entry.669701451":telephone_order,
           "entry.1377213559": email_order,
           "entry.1215165530": number_order,
           "entry.234677964": datetime_order,
           "entry.1561971561": more,
       },
       type: "POST",
       dataType: "jsonp", //các bạn có thể để xml, nhưng khi bật console lên sẽ thấy báo đỏ lòm vì ko cho cross, còn cái này nó vẫn cảnh báo nhưng màu xám thôi, ko đỏ :v
       success: function(d)
   {}, //do đã bảo ở trên là nó ko cho cross đâu, nên khi gửi data xong ko trả về success được, ko cần điền cái này nhé
       error: function(x, y, z) {
           $('#success-msg').show(); //hiện ra cái mess báo thành công khi gửi xong
       }
   });

   return false;
}