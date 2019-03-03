window.onload = function() {
    var input = document.getElementsByClassName('inp');
    var phoneNumber = document.getElementById('phone');
    var mail = document.getElementById('mail');
    var form = document.getElementById('offer__form');
    var load = document.getElementById('loader');
    var body = document.body;
    var modal = document.getElementById('modal');
    var modalText = document.getElementById('modal__text');
    var modalBtn = document.getElementById('modal__button');
    //valid email
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
    //valid phone number
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
    //loader & block html true/false
    function loader(loadeProcess) {
        if (loadeProcess) {
            load.style = 'display: block';
            body.classList.add("stop-scrolling");

        } else {
            load.style = 'display: none';
            body.classList.remove("stop-scrolling");
        }

    }
    //show modal true/false    
    function showMessage(param) {
        if (param) {
            modalText.innerHTML = 'Регистрация прошла успешно!';
            modal.style = 'display: flex';
            for (var i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        } else {
            modalText.innerHTML = 'Ошибка регистрации!';
            modal.style = 'display: flex';
        }
        modalBtn.onclick = function() {
            modal.style = 'display: none';
            loader(false);
        }
    }
    //ajax
    function sendData(data) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://sw.ants.co.ua/demo/', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('Access-Control-Allow-Origin', '');
        xhr.onload = function() {
            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                console.log(xhr.responseText);
                //if response == true -> run showMessage(true);...
            };
        };
        xhr.send(data);
    };
    //form send
    form.onsubmit = function() {
        var email = validMail(mail);
        var phone = validPhone(phoneNumber);
        if (phone && email) {
            loader(true);
            var timer = setTimeout(function() {
                showMessage(false);
            }, 3000);
            var data = '';
            for (var i = 0; i < input.length; i++) {
                data += input[i].name + '=' + encodeURIComponent(input[i].value) + '&';
            }
            sendData(data);
        }
        return false;
    }

};