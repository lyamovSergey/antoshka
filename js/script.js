window.onload = function() {
    var phoneNumber = document.getElementById('phone');
    var mail = document.getElementById('mail');
    var form = document.getElementById('offer__form');
    var load = document.getElementById('loader');
    var body = document.body;

    function validMail(email) {
        var regularMail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        var email = regularMail.test(email.value);
        if (email) {
            mailError.innerHTML = '';
            return true;
        }
        mailError.innerHTML = 'Введите правильный адрес';
        return false;
    };

    function validPhone(num) {
        var regularPhone = /^[\d]{10}$/;
        var phone = regularPhone.test(num.value);
        if (phone) {
            phoneError.innerHTML = "";
            return true;
        }
        phoneError.innerHTML = 'Введите правильный номер';
        return false;
    };

    function loader(loadeProcess) {
        if (loadeProcess) {
            load.style = 'display: block';
            body.classList.add("stop-scrolling");

        } else {
            load.style = 'display: none';
            body.classList.remove("stop-scrolling");
        }

    }

    function sendData(data) {
        var xhr = new XMLHttpRequest();
        // var param = JSON.stringify(data);
        // xhr.responseType = 'json';
        xhr.open('POST', 'http://sw.ants.co.ua/demo/', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function() {
            console.log(xhr);
            // do something with jsonResponse
        };
        console.log("data", data);
        xhr.send(data);
    };

    form.onsubmit = function() {
        var email = validMail(mail);
        var phone = validPhone(phoneNumber);
        if (phone && email) {
            loader(true);
            var timer = setTimeout(function(){
                loader(false);
            }, 3000);
            var input = document.getElementsByClassName('inp');
            var data = '';
            for (var i = 0; i < input.length; i++) {
                data += input[i].name + '=' + encodeURIComponent(input[i].value) + '&';
            }
            // var param = JSON.stringify(data);
            console.log(typeof param);
            var param = encodeURIComponent("couponcode=0087-0220302018&name=111&mail=asd@gmail.com&phoneNumber=1111111111&lastName=asd");

            sendData(data);
        }
        return false;
    }

};