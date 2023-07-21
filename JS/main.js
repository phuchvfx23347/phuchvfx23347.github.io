function submitHandler(event) {
    //bam nut button khong load lai web
    event.preventDefault();
    
    //lay gia tri da nhap vao input
    console.log(document.querySelector('#email').value);
    var inputEmail = document.querySelector('#email').value;
    //kiem tra gia tri nhap co dung dinh dang email
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //tao ham kiem tra
    function checkedValidate(email) {
        if(email.match(regex)===null){
            var emailVerification = document.querySelector('#emailVerification');
            emailVerification.innerHTML = 'Vui lòng nhập đúng email';
            // alert('Vui lòng nhập đúng email')
            return false
        }
        return true
    }

    if(checkedValidate(inputEmail)){
    //dong form va mo thong tin ca nhan nhan button Submit
        document.querySelector('#personal-container').style.display='block';
        document.querySelector('#form-container').style.display='none';
    }

    
}
function cancelHandler(event) {
    //dong thong tin ca nhan va mo lai form nhan nut x
    document.querySelector('#personal-container').style.display='none';
    document.querySelector('#form-container').style.display='block'
    //sau khi cancel xoa gia tri input
    document.querySelector('#email').value=''
    var emailVerification = document.querySelector('#emailVerification');
    emailVerification.innerHTML = 'Hãy nhập email để xác thực';
}
function onHide() {
    document.querySelector('#Hide').style.display='block';
}
function offHide() {
    document.querySelector('#Hide').style.display='none';
}

//Phan cua laptop
//kinh nghiem
let flagLaptop = true;
function viewMoreLaptop() {
    if(flagLaptop) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-jobLaptop');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLessLaptop');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-jobLaptop');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLessLaptop');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flagLaptop = !flagLaptop;
}
//khi di chuot vao, hien thi button viewMoreLess
function onViewLaptop() {
    document.querySelector('#viewMoreLessLaptop').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offViewLaptop() {
    document.querySelector('#viewMoreLessLaptop').style.display='none';
}
//hoc van
let flag2Laptop = true;
function viewMore2Laptop() {
    if(flag2Laptop) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job2Laptop');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess2Laptop');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job2Laptop');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess2Laptop')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag2Laptop = !flag2Laptop;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView2Laptop() {
    document.querySelector('#viewMoreLess2Laptop').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView2Laptop() {
    document.querySelector('#viewMoreLess2Laptop').style.display='none';
}
//hoat dong
let flag3Laptop = true;
function viewMore3Laptop() {
    if(flag3Laptop) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job3Laptop');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess3Laptop');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job3Laptop');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess3Laptop')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag3Laptop = !flag3Laptop;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView3Laptop() {
    document.querySelector('#viewMoreLess3Laptop').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView3Laptop() {
    document.querySelector('#viewMoreLess3Laptop').style.display='none';
}
//so thich
let flag4Laptop = true;
function viewMore4Laptop() {
    if(flag4Laptop) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job4Laptop');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess4Laptop');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job4Laptop');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess4Laptop')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag4Laptop = !flag4Laptop;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView4Laptop() {
    document.querySelector('#viewMoreLess4Laptop').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView4Laptop() {
    document.querySelector('#viewMoreLess4Laptop').style.display='none';
}
//ngon ngu
let flag5Laptop = true;
function viewMore5Laptop() {
    if(flag5Laptop) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job5Laptop');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess5Laptop');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job5Laptop');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess5Laptop')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag5Laptop = !flag5Laptop;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView5Laptop() {
    document.querySelector('#viewMoreLess5Laptop').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView5Laptop() {
    document.querySelector('#viewMoreLess5Laptop').style.display='none';
}
//ky nang
let flag6Laptop = true;
function viewMore6Laptop() {
    if(flag6Laptop) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job6Laptop');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess6Laptop');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job6Laptop');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess6Laptop')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessLaptop" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag6Laptop = !flag6Laptop;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView6Laptop() {
    document.querySelector('#viewMoreLess6Laptop').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView6Laptop() {
    document.querySelector('#viewMoreLess6Laptop').style.display='none';
}

//Phan cua Tablet
//kinh nghiem
let flagTablet = true;
function viewMoreTablet() {
    if(flagTablet) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-jobTablet');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLessTablet');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-jobTablet');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLessTablet');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flagTablet = !flagTablet;
}
//khi di chuot vao, hien thi button viewMoreLess
function onViewTablet() {
    document.querySelector('#viewMoreLessTablet').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offViewTablet() {
    document.querySelector('#viewMoreLessTablet').style.display='none';
}
//hoc van
let flag2Tablet = true;
function viewMore2Tablet() {
    if(flag2Tablet) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job2Tablet');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess2Tablet');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job2Tablet');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess2Tablet')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag2Tablet = !flag2Tablet;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView2Tablet() {
    document.querySelector('#viewMoreLess2Tablet').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView2Tablet() {
    document.querySelector('#viewMoreLess2Tablet').style.display='none';
}
//hoat dong
let flag3Tablet = true;
function viewMore3Tablet() {
    if(flag3Tablet) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job3Tablet');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess3Tablet');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job3Tablet');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess3Tablet')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag3Tablet = !flag3Tablet;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView3Tablet() {
    document.querySelector('#viewMoreLess3Tablet').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView3Tablet() {
    document.querySelector('#viewMoreLess3Tablet').style.display='none';
}
//so thich
let flag4Tablet = true;
function viewMore4Tablet() {
    if(flag4Tablet) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job4Tablet');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess4Tablet');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job4Tablet');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess4Tablet')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag4Tablet = !flag4Tablet;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView4Tablet() {
    document.querySelector('#viewMoreLess4Tablet').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView4Tablet() {
    document.querySelector('#viewMoreLess4Tablet').style.display='none';
}
//ngon ngu
let flag5Tablet = true;
function viewMore5Tablet() {
    if(flag5Tablet) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job5Tablet');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess5Tablet');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job5Tablet');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess5Tablet')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag5Tablet = !flag5Tablet;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView5Tablet() {
    document.querySelector('#viewMoreLess5Tablet').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView5Tablet() {
    document.querySelector('#viewMoreLess5Tablet').style.display='none';
}
//ky nang
let flag6Tablet = true;
function viewMore6Tablet() {
    if(flag6Tablet) {
    //mo dong thong tin nghe nghiep
        var row2job = document.querySelector('#row-2-job6Tablet');
        row2job.style.display='block';
        var viewMoreLess = document.querySelector('#viewMoreLess6Tablet');
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up" style="font-size: 18px;"></i> VIEW LESS</p>';
        viewMoreLess.style.fontSize = "14px";
    } else {
        var row2job = document.querySelector('#row-2-job6Tablet');
        row2job.style.display='none';
        var viewMoreLess = document.querySelector('#viewMoreLess6Tablet')
        viewMoreLess.innerHTML = 
        '<p id="ctviewMoreLessTablet" style="font-size: 14px; color: black;"><i class="fa-solid fa-caret-up fa-flip-vertical" style="font-size: 18px;"></i> VIEW MORE</p>';
        viewMoreLess.style.fontSize = "14px";
    }
    flag6Tablet = !flag6Tablet;
}
//khi di chuot vao, hien thi button viewMoreLess
function onView6Tablet() {
    document.querySelector('#viewMoreLess6Tablet').style.display='block';
}
//khi di chuot ra, tat hien thi button viewMoreLess
function offView6Tablet() {
    document.querySelector('#viewMoreLess6Tablet').style.display='none';
}
