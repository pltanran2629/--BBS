import { login } from "../../API/login.js";
var modal = document.getElementById('myModal');
var btn = document.getElementById("nav-sign");
var span = document.querySelector('.close');
var yes = document.querySelector(".main-true");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
yes.onclick = function() {

    var studentnum = document.getElementById("nav-sign-studentnum").value;
    var password = document.getElementById("nav-sign-password").value;
    login({
            username: studentnum,
            password: password
        })
        .then(function(response) {
            if (response.data.status == 0) {
                console.log("成功了");
                console.log(response.data.currentUser);

                function changeTimeFormat(time) {
                    var date = new Date(time);
                    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                    var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                    var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                    var sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
                    return date.getFullYear() + "-" + month + "-" + currentDate + " " + hh + ":" + mm + ":" + sec;

                }
                var a = changeTimeFormat(response.data.currentUser.createTime);

                console.log(a);
            } else { console.log("登录失败"); }
        })



    // axios.post("http://bluesun.natapp1.cc/user/login", JSON.stringify({

    //         username: studentnum,
    //         password: password

    //     }))
    //     .then(function(response) {
    //         if (response.data.status == 0) {
    //             console.log("成功了");
    //             console.log(response.data.currentUser);

    //             function changeTimeFormat(time) {
    //                 var date = new Date(time);
    //                 var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    //                 var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    //                 var hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    //                 var mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    //                 var sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    //                 return date.getFullYear() + "-" + month + "-" + currentDate + " " + hh + ":" + mm + ":" + sec;

    //             }
    //             var a = changeTimeFormat(response.data.currentUser.createTime);

    //             console.log(a);
    //         } else { console.log("登录失败"); }




    //     })


    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}