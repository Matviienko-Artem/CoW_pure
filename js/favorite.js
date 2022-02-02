let allItem = document.querySelectorAll('.favorites__list > li')

let addBtn = document.querySelectorAll('.favorites__add')

let removeBtn = document.querySelectorAll('.favorites__remove')

let inner = document.querySelector('.favorites__inner > span');

let innerP = document.querySelector('.favorites__inner > p');

let allP = document.querySelectorAll('.favorites__inner > p');

let summarInner = document.querySelector('.favorites__cost')

let summarDollar = document.querySelector('.favorites__dollar')

let rem = document.querySelector('.popupRemove')


let reducer = (firstValue, secondValue) => firstValue + secondValue;


let productCounter = document.querySelectorAll('.productCounter')


let allSum = []

let arrDate = JSON.parse(localStorage.getItem('info'))

previewName.innerHTML = arrDate[4]

document.querySelectorAll('.popupThx__close').forEach(elem => {

  elem.addEventListener('click', function () {
    let clear = document.querySelectorAll('.delete')

    for (let key of clear) {
      key.classList.remove('delete')
    }

    rem.classList.remove('popupRemove--active')

    document.querySelector('.grey').classList.remove('grey--active')
  })
})


document.querySelectorAll('.ravorites__del').forEach(elem => {
  elem.addEventListener('click', function () {
    let grey = document.querySelector('.grey')

    elem.parentElement.parentElement.classList.add('delete')


    grey.classList.add('grey--active')

    document.querySelector('.popupRemove').classList.add('popupRemove--active')
  })
})



document.querySelector('.popupRemove__yes').addEventListener('click', function () {
  let del = document.querySelectorAll('.favorites__list > li')
  let p = document.querySelectorAll('.favorites__inner > p');

  document.querySelector('.popupRemove').classList.remove('popupRemove--active')
  document.querySelector('.grey').classList.remove('grey--active')

  let count = document.querySelectorAll('.favorites__inner > span')

  for (let silence of count) {
    silence.innerHTML = 1;
  }

  for (let key of del) {
    if (key.classList.contains('delete')) {

      if (allSum.length == 1) {
        allSum.length = 0
        summarInner.innerHTML = 0
        summarDollar.innerHTML = 0
      }
      let check = allSum.indexOf(+key.querySelector('p').innerHTML)
      allSum.splice(check, 1)
      allSum.splice(test.length - 1, 999999999)
      key.remove()
    }
  }

  let parse = parseInt(allSum.reduce(reducer) * 0.035)


  try {
    summarInner.innerHTML = allSum.reduce(reducer)
    summarDollar.innerHTML = parse
  } catch (error) {

  }
})

document.querySelector('.popupRemove__no').addEventListener('click', function () {
  let del = document.querySelectorAll('.favorites__list > li')

  let grey = document.querySelector('.grey')

  grey.classList.remove('grey--active')

  document.querySelector('.popupRemove').classList.remove('popupRemove--active')

  setTimeout(() => {
    for (let key of del) {
      if (key.classList.contains('delete')) {
        key.classList.remove('delete')
      }
    }
  }, 1);

})

addBtn.forEach(func => {
  func.addEventListener('click', function () {
    let count = +func.parentElement.querySelector('span').innerHTML
    func.parentElement.querySelector('span').innerHTML = count += 1

    for (let key of removeBtn) {
      key.removeAttribute('disabled')
    }

    console.log(parse);
    allSum.push(+func.parentElement.querySelector('p').innerHTML)
    parse = parseInt(allSum.reduce(reducer) * 0.035)
    summarInner.innerHTML = allSum.reduce(reducer)
    summarDollar.innerHTML = parse

  })
})

removeBtn.forEach(func => {
  func.addEventListener('click', function () {
    let count = +func.parentElement.querySelector('span').innerHTML
    func.parentElement.querySelector('span').innerHTML = count -= 1


    allSum.pop(+func.parentElement.querySelector('p').innerHTML)
    parse = parseInt(allSum.reduce(reducer) * 0.035)
    summarDollar.innerHTML = parse
    summarInner.innerHTML = allSum.reduce(reducer)

    if (count == 1) {
      func.setAttribute('disabled', 'true')
    }
  })
})

for (let key of allP) {

  allSum.push(+key.innerHTML)
}


localStorage.setItem('favCount', allSum.length)

for (let key of productCounter) {
  key.innerHTML = localStorage.getItem('favCount')
}

let parse = parseInt(allSum.reduce(reducer) * 0.035)

let test = document.querySelectorAll('.favorites__list > li')
summarInner.innerHTML = allSum.reduce(reducer)
summarDollar.innerHTML = parse