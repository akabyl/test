const navBtn = document.querySelectorAll('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const modalNav = document.querySelector('.mobile-modal');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');
const btnPrimary = document.querySelectorAll('.btn-feed')
const feedBackBtn = document.querySelector('.feedback__btn')
const inputName = document.querySelector('#name')
const inputPhone = document.querySelector('#phone')
const inputCheck = document.querySelector('#check')
const form = document.querySelector('.feedback__form')
const burgers = document.querySelectorAll('.burger-img')
const burgerList = document.querySelector('.list-wrap')
const wrapper = document.querySelector('.wrapper-content')
const LS = localStorage;

inputName.required = true;
inputPhone.required = true;
inputCheck.required = true;

let formData = {}
form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value;
  LS.setItem('formData', JSON.stringify(formData));
})
if(LS.getItem('formData')) {
  formData = JSON.parse(LS.getItem('formData'));
  // form.elements[name]
  for (let key in formData) {
    form.elements[key].value = formData[key]
  }
}


inputPhone.addEventListener('input', 
    function(e){
      // this.value = this.value.replace(/[^\d.]/g, '');
      this.value = this.value.replace(/[^0-9,+,-\.]/g, '');
    }
)


burgers.forEach((burger) => {
  burger.addEventListener('click', (e) => {
    e.stopPropagation()
    burgerList.classList.toggle('list-wrap--active');
  })
})

wrapper.onclick = function(e) {
  burgerList.classList.remove('list-wrap--active');
}



btnPrimary.forEach((value) => {
  value.onclick = () => {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
  }
})

navBtn.forEach((value) => {
  value.onclick = () => {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('nav-icon--active');
    modalNav.classList.remove('mobile-modal--open');
    document.body.classList.toggle('no-scroll');
  }
})

fade.onclick = function () {
  nav.classList.toggle('mobile-nav--open');
  fade.classList.toggle('mobile-nav-fade--open');
  modalNav.classList.remove('mobile-modal--open');
  menuIcon.classList.toggle('nav-icon--active');
  document.body.classList.toggle('no-scroll');
};

form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log(event);
  modalNav.classList.add('mobile-modal--open');
})


