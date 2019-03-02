window.onload = function() {
    var couponcode = document.getElementById('couponcode');
    var phoneNumber = document.getElementById('phone');
    var mail = document.getElementById('mail');
    var form = document.getElementById('offer__form');

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

    function validPhone() {
        var regularPhone = /^[\d]{10}$/;
        var phone = regularPhone.test(phoneNumber.value);
        if (phone) {
            phoneError.innerHTML = "";
            return true;
        }
        phoneError.innerHTML = 'Введите правильный номер';
        return false;
    };

    function sendData(data) {
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open('POST', 'http://sw.ants.co.ua/demo/', true);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      


        xhr.send(data);
        console.log(xhr);
    };

    form.onsubmit = function() {
        var phone = validMail();
        var email = validPhone();
        if (phone && email) {
            var input = document.getElementsByClassName('inp');
            var data = {};
            for (var i = 0; i < input.length; i++) {
                data[input[i].name] = input[i].value;
            }
            sendData(data);
        }
        return false;
    }


};