'use strict'

new WOW().init();

let swipe = document.querySelector('.menu__swipe')

let list = document.querySelectorAll('.menu__list')

swipe.addEventListener('click', () => {
  for (let key of list) {
    key.classList.toggle('menu__list--active')
  }

  swipe.classList.toggle('menu__swipe--active')
})

let adress = document.querySelector('.adress__selector')

let complete = document.querySelector('.registration__complete')

let password = document.getElementById('pass')

let rePass = document.getElementById('rePass')

let name = document.getElementById('name')

let secondName = document.getElementById('secondName')

let born = document.getElementById('bornDate')

let telegram = document.getElementById('telegram')

let mail = document.getElementById('mail')

let phone = document.getElementById('phone')

let gender = document.querySelectorAll('.registration__btn')

let show = document.querySelectorAll('.registration__show')

let save = document.querySelectorAll('.info__save')

let infoPassword = document.getElementById('info-pass')

let infoRePass = document.getElementById('info-rePass')

let infoNewPass = document.getElementById('info-newPass')

let infoName = document.getElementById('info-name')

let infoSecondName = document.getElementById('info-secondName')

let infoBorn = document.getElementById('info-bornDate')

let infoTelegram = document.getElementById('info-telegram')

let infoMail = document.getElementById('info-mail')

let infoPhone = document.getElementById('info-phone')

let genderInfo = JSON.parse(localStorage.getItem('gender'))

let genderBtn = document.querySelectorAll('.registration__btn')

let infoEdit = document.querySelectorAll('.info__edit')

let infoDate = [infoPassword, infoName, infoSecondName, infoBorn, infoPhone]

let productCounter = document.querySelectorAll('.productCounter')



let li = document.querySelectorAll('.adress__item')

let addNew = document.querySelector('.adress__new')

let omega = document.querySelector('.adress__block')



let reducer = (firstValue, secondValue) => firstValue + secondValue;

let infoData = []

let info = []

let all = [password, name, secondName, born, phone]

productCounter.forEach(c => {
  c.innerHTML = localStorage.getItem('favCount')
})

gender.forEach(func => {
  func.addEventListener('click', function () {
    gender.forEach(btn => {
      btn.classList.remove('registration__btn--active')
      this.classList.add('registration__btn--active')
      localStorage.removeItem('gender')
      localStorage.setItem('gender', JSON.stringify(this.innerHTML))
    })
  })
})

show.forEach(hide => {
  hide.addEventListener('click', function () {
    hide.classList.toggle('registration__show--active')

    if (hide.classList.contains('typeText')) {

      hide.classList.remove('typeText')
      hide.parentElement.querySelector('.info__input').setAttribute('type', 'text')

    } else {
      try {
        hide.classList.add('typeText')
        hide.parentElement.querySelector('.info__input').setAttribute('type', 'password')
      } catch (error) {}
    }
  })
})


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function error(obj, text, c) {
  let error = document.createElement('p')
  error.classList.add(c)
  error.innerHTML = text
  setTimeout(() => {
    error.remove()
  }, 5000);
  return obj.after(error)
}

let infopass = document.getElementById('info-pass')

try {
  complete.addEventListener('click', () => {
    info.length = 0;

    if (telegram.value.indexOf('@') === 0) {
      info.push(telegram.value)
    } else {
      error(telegram, 'Правильная форма @telegram', 'error')
    }

    if (rePass.value.indexOf(password.value) === 0) {
      info.push(password.value)
    } else {
      error(rePass, 'Пароли не совпадают', 'error')
    }

    if (validateEmail(mail.value) == false) {
      error(mail, 'Неправильный email или пароль', 'error')
    } else {
      info.push(mail.value)
    }

    for (let key of all) {
      if (key.value == '') {
        info.length = 0

        localStorage.removeItem('info')

        error(key, 'Вы не заполнили поле', 'error-area')

      } else {
        info.push(key.value)
      }
    }

    localStorage.setItem('info', JSON.stringify(info))

  })
} catch (error) {}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function popUp() {
  let popup = document.querySelector('.popupThx')

  let grey = document.querySelector('.grey')

  popup.classList.add('popupThx--active')

  grey.classList.add('grey--active')

  setTimeout(() => {
    popup.classList.remove('popupThx--active')
  }, 5000);

  setTimeout(() => {
    grey.classList.remove('grey--active')
  }, 5000);
}

let trabl = document.querySelectorAll('.info__input')


try {
  save.forEach(dataSave => {

    dataSave.addEventListener('click', () => {
      popUp()

      infoData.length = 0;

      if (infopass.value.indexOf(arrDate[1]) === 0) {

        info.push(infopass.value)
      } else {
        error(infopass, 'Пароли не совпадают', 'error')
      }

      if (infoTelegram.value.indexOf('@') === 0) {
        infoData.push(infoTelegram.value)
      } else {

        error(infoTelegram, 'Правильная форма @telegram', 'error')
      }

      if (infoRePass.value.indexOf(infoNewPass.value) === 0) {
        infoData.push(infoNewPass.value)
      } else {

        error(infoRePass, 'Пароли не совпадают', 'error')
      }

      if (validateEmail(infoMail.value) == false) {
        error(infoMail, 'Неправильный email или пароль', 'error')
      } else {
        infoData.push(infoMail.value)
      }

      for (let data of infoDate) {
        if (data.value == '') {
          infoData.length = 0

          localStorage.removeItem('info')

          error(data, 'Вы не заполнили поле', 'error-area')

        } else {
          infoData.push(data.value)
        }
      }


      localStorage.setItem('info', JSON.stringify(infoData))

    })
  })

  infopass.addEventListener('click', function () {
    infopass.value = ''
  })

  infoNewPass.addEventListener('click', function () {
    infoNewPass.value = ''
  })

  infoRePass.addEventListener('click', function () {
    infoRePass.value = ''
  })
} catch (error) {}

infoEdit.forEach(func => {
  func.addEventListener('click', function () {
    func.parentNode.querySelector('.info__input').setAttribute('type', 'text')
    func.parentNode.querySelector('.info__input').removeAttribute('disabled')
    func.parentNode.querySelector('.info__input').value = ''
    infoEdit.forEach(btn => {
      btn.classList.remove('info__edit--active')
      this.classList.add('info__edit--active')
    })
  })
})

let arrDate = JSON.parse(localStorage.getItem('info'))

function check(attr) {
  for (let omega of genderBtn) {
    if (omega.hasAttribute(attr)) {
      omega.classList.add('registration__btn--active')
    }
  }
}

for (let key of genderBtn) {
  if (genderInfo === 'Мужской') {
    check('data-male')
  } else {
    check('data-female')
  }
}

try {
  previewName.innerHTML = arrDate[4]

  infoName.value = arrDate[4]

  infoSecondName.value = arrDate[5]

  infoBorn.value = arrDate[6]

  infoTelegram.value = arrDate[0]

  infoMail.value = arrDate[2]

  infoPhone.value = arrDate[7]

  infoPassword.value = arrDate[1]

  infoNewPass.value = arrDate[1]

  infoRePass.value = arrDate[1]
} catch (error) {

}


let aside = document.querySelectorAll('.aside__btn')

aside.forEach(func => {
  func.addEventListener('click', function () {
    aside.forEach(btn => {
      btn.classList.remove('aside__btn--active')
      this.classList.add('aside__btn--active')
    })
  })
})


let rem = document.querySelector('.popupRemove')


let del = document.querySelector('.popupDelete')

document.querySelectorAll('.popupThx__close').forEach(elem => {
  elem.addEventListener('click', function () {
    document.querySelector('.popupThx').classList.remove('popupThx--active')

    del.classList.remove('popupDelete--active')

    try {
      rem.classList.remove('popupRemove--active')

    } catch (error) {

    }

    document.querySelector('.grey').classList.remove('grey--active')
  })
})




try {
  document.querySelector('.popupDelete__yes').addEventListener('click', function () {
    let del = document.querySelectorAll('.adress__block')

    document.querySelector('.popupDelete').classList.remove('popupDelete--active')

    document.querySelector('.grey').classList.remove('grey--active')

    setTimeout(() => {
      for (let key of del) {
        if (key.classList.contains('delete')) {
          key.remove()
        }
      }
    }, 1);
  })

  document.querySelector('.popupDelete__no').addEventListener('click', function () {
    let del = document.querySelectorAll('.adress__block')
    document.querySelector('.popupDelete').classList.remove('popupDelete--active')
    document.querySelector('.grey').classList.remove('grey--active')

    setTimeout(() => {
      for (let key of del) {
        if (key.classList.contains('delete')) {
          key.classList.remove('delete')
        }
      }
    }, 1);
  })

  function inList() {
    let del = document.querySelectorAll('.adress__list > li')

    setTimeout(() => {
      del.forEach(func => {
        func.addEventListener('click', function () {
          document.querySelector('.adress__selector')
            .innerHTML = func.innerHTML
        })
      })
    }, 1);
  }
} catch (error) {

}


li.forEach(func => {
  func.addEventListener('click', function () {
    adress.innerHTML = func.innerHTML
  })
})

try {
  adress.addEventListener('click', function () {
    document.querySelector('.adress__list').classList.toggle('adress__list--active')
  })
} catch (error) {

}

try {
  addNew.addEventListener('click', function () {
    omega.after(omega)
  })
} catch (error) {

}

let counter = 1

function deleting() {
  let del = document.querySelectorAll('.adress__block')

  let popup = document.querySelector('.popupDelete')
  popup.classList.add('popupDelete--active')

  let grey = document.querySelector('.grey')
  grey.classList.add('grey--active')

  del.forEach(func => {
    func.addEventListener('click', function () {
      del.forEach(btn => {
        this.classList.add('delete')
      })
    })
  })
}

function post() {
  let massive = []

  let del = document.querySelectorAll('.adress__wrapper')



  for (let key of del) {
    let check = key.querySelectorAll('.adress__input');

    for (let obj of check) {
      massive.push(obj.value + ' ')
      obj.value = ''
    }
  }




  let popup = document.querySelector('.popupThx')

  let grey = document.querySelector('.grey')

  popup.classList.add('popupThx--active')

  grey.classList.add('grey--active')

  setTimeout(() => {
    popup.classList.remove('popupThx--active')
  }, 5000);

  setTimeout(() => {
    grey.classList.remove('grey--active')
  }, 5000);

  let item = document.createElement('li')
  item.setAttribute('onclick', 'inList()')
  item.innerHTML = massive.join(' ')
  document.querySelector('.adress__list').prepend(item)

  adress.innerHTML = document.querySelector('.adress__list').firstElementChild.innerHTML
}

let infoNew = document.getElementById('info-newPass')

// let infopass = document.getElementById('info-pass')

let arrTest = [infoNew, infopass]




$(function () {

  $(function () {
    $("#phone").mask("+38 (099) 999 9999 ");
  });

  $("#bornDate").mask("99-99-9999", {
    placeholder: "ДД.ММ.ГГГГ"
  });

  $(function () {
    $("#info-phone").mask("+38 (099) 999 9999 ");
  });

  $("#info-bornDate").mask("99-99-9999", {
    placeholder: "ДД.ММ.ГГГГ"
  });

  $(addNew).on('click', function () {
    let test = document.querySelectorAll('.adress__block')
    counter = test.length

    $(omega).after(`<div class="adress__block">
          <div class="wrapper">
            <p class="adress__text">Адресс <span class="adressCounter">${counter}</span></p>
            <button class="adress__remove" onclick="deleting()">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#1F1F1F" />
                <circle cx="18.9991" cy="19.0001" r="14.3545" stroke="white" stroke-dasharray="3 3" />
                <path
                  d="M20.7005 17.2256C20.5412 17.2256 20.4121 17.3479 20.4121 17.4987V22.6609C20.4121 22.8116 20.5412 22.934 20.7005 22.934C20.8597 22.934 20.9888 22.8116 20.9888 22.6609V17.4987C20.9888 17.3479 20.8597 17.2256 20.7005 17.2256Z"
                  fill="white" />
                <path
                  d="M17.2981 17.2256C17.1388 17.2256 17.0098 17.3479 17.0098 17.4987V22.6609C17.0098 22.8116 17.1388 22.934 17.2981 22.934C17.4574 22.934 17.5865 22.8116 17.5865 22.6609V17.4987C17.5865 17.3479 17.4574 17.2256 17.2981 17.2256Z"
                  fill="white" />
                <path
                  d="M14.819 16.4721V23.2014C14.819 23.5992 14.9729 23.9727 15.2419 24.2407C15.5096 24.5094 15.8822 24.662 16.2722 24.6627H21.7278C22.1179 24.662 22.4905 24.5094 22.7581 24.2407C23.0271 23.9727 23.181 23.5992 23.181 23.2014V16.4721C23.7157 16.3377 24.0622 15.8484 23.9907 15.3287C23.919 14.8091 23.4517 14.4204 22.8984 14.4203H21.4221V14.0789C21.4238 13.7918 21.304 13.5161 21.0894 13.3133C20.8748 13.1106 20.5833 12.9977 20.2802 13H17.7198C17.4167 12.9977 17.1252 13.1106 16.9106 13.3133C16.696 13.5161 16.5762 13.7918 16.5779 14.0789V14.4203H15.1016C14.5483 14.4204 14.081 14.8091 14.0093 15.3287C13.9378 15.8484 14.2843 16.3377 14.819 16.4721ZM21.7278 24.1164H16.2722C15.7792 24.1164 15.3957 23.7152 15.3957 23.2014V16.4961H22.6044V23.2014C22.6044 23.7152 22.2208 24.1164 21.7278 24.1164ZM17.1546 14.0789C17.1527 13.9367 17.2117 13.7998 17.3182 13.6994C17.4247 13.599 17.5695 13.5438 17.7198 13.5463H20.2802C20.4305 13.5438 20.5753 13.599 20.6818 13.6994C20.7883 13.7997 20.8473 13.9367 20.8454 14.0789V14.4203H17.1546V14.0789ZM15.1016 14.9666H22.8984C23.1851 14.9666 23.4175 15.1867 23.4175 15.4582C23.4175 15.7297 23.1851 15.9498 22.8984 15.9498H15.1016C14.8149 15.9498 14.5825 15.7297 14.5825 15.4582C14.5825 15.1867 14.8149 14.9666 15.1016 14.9666Z"
                  fill="white" />
                <path
                  d="M18.9993 17.2256C18.84 17.2256 18.7109 17.3479 18.7109 17.4987V22.6609C18.7109 22.8116 18.84 22.934 18.9993 22.934C19.1586 22.934 19.2876 22.8116 19.2876 22.6609V17.4987C19.2876 17.3479 19.1586 17.2256 18.9993 17.2256Z"
                  fill="white" />
              </svg>
            </button>
          </div>
          <div class="adress__wrapper">
            <label class="adress__label" for="">
              Город
              <input class="adress__input" type="text">
              <button class="info__edit"></button>
            </label>
            <label class="adress__label" for="">
              Улица
              <input class="adress__input" type="text">
              <button class="info__edit"></button>
            </label>
            <div class="wrapper">
              <label class="info__label" for="">
                дом
                <input class="adress__input" type="text">
                <button class="info__edit"></button>
              </label>
              <label class="adress__label adress__label--telegram" for="">
                Квартира
                <input class="adress__input" type="text">
                <button class="info__edit"></button>
              </label>
            </div>
            <button class="adress__save" onclick="post()">Сохранить</button>
          </div>
        </div>`)
  })
})