window.onload = function() {
    var phoneNumber = document.getElementById('phone');
    var mail = document.getElementById('mail');
    var form = document.getElementById('offer__form');
    var load = document.getElementById('loader');
    var body = document.body;

    function validMail() {
        var regularMail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
        var email = regularMail.test(mail.value);
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
        xhr.onload = function() {
            console.log(xhr);
            // do something with jsonResponse
        };
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    };

    form.onsubmit = function() {
        var email = validMail();
        var phone = validPhone(phoneNumber);
        if (phone && email) {
            loader(true);
            var timer = setTimeout(function(){
                loader(false);
            }, 3000);
            var input = document.getElementsByClassName('inp');
            var data = {};
            for (var i = 0; i < input.length; i++) {
                data[input[i].name] = input[i].value;
            }
            // sendData(data);
        }
        return false;
    }

};