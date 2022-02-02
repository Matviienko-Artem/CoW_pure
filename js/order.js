let test = document.querySelectorAll('.bookCost')


let zhoz = document.querySelectorAll('.orders__item')

let zhopa = document.querySelectorAll('.orders__inner')

let cost = document.querySelectorAll('.orders__cost')


let reduced = (firstNumber, secondNumber) => firstNumber + secondNumber

let sortArr = []




zhoz.forEach(func => {
  let arr = []
  let count = func.querySelectorAll('.bookCost')

  let find = document.querySelectorAll('.orders__cost')

  count.forEach(elem => {
    arr.push(+elem.innerHTML)
  })

  sortArr.push(arr.reduce(reduced))

})

let id = -1

cost.forEach(elem => {
  id += 1
  elem.setAttribute('data-number', id)
  elem.innerHTML = sortArr[elem.getAttribute('data-number')]
})



test.forEach(each => {
  let count = each.parentElement.parentElement.parentElement.parentElement.querySelector('.orders__count')
    .innerHTML = each.parentElement.parentElement.parentElement.childElementCount

})



let statusCheck = document.querySelectorAll('.statusCheck')

for (let key of statusCheck) {
  if (key.innerHTML === 'Доставлен') {
    key.style.color = '#8AC641'
  } else if (key.innerHTML === 'В процессе') {
    key.style.color = 'orange'
  } else {
    key.style.color = ' #EF3E31'
  }
}