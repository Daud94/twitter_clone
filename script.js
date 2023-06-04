// DOM elements

const mainPage = document.querySelector('.main-page')
const loginPage = document.querySelector('.login-page')
const middleContent = document.querySelector('.middle-content')
const newsFeedPage = document.querySelector('.feeds-page')
const btnTop = document.querySelector('.btn-top')
const loginModal = document.querySelector('.login-modal')
const cancelButton = document.querySelector('.login-modal .bi-x-circle')
const loginFormBtn = document.querySelector('.login-form-btn')
const loginUserInfo = document.querySelector('.login-user-info')
const loginUserPassword = document.querySelector('.login-user-password')
const  postBtn = document.querySelector('.post-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const modal = document.querySelector('.modal')
const modalHeaderCancel = document.querySelector('.modal-header .bi-x-circle')
const modalInput = document.querySelector('.modal-input')
const modalPostBtn = document.querySelector('.modal-header button')
const modalFooterPlus = document.querySelector('.modal-footer span')
const user = document.querySelector('.user')
const sidebar = document.querySelector('.sidebar')
const sidebarWrapper = document.querySelector('.sidebar-wrapper')
const sidebarX = document.querySelector('.sidebar-header i')
/*********************************/
/*********************************/
// Main page
const goToLoginPage = () => {
    mainPage.style.display = 'none'
    loginPage.style.display = 'grid'
}

middleContent.addEventListener('click', (e) => {
    if (e.target.classList[1] === 'main-btn')
    {
        goToLoginPage()
    }
})

btnTop.addEventListener('click',()=> {
    const inputUserInfo = document.querySelector('.user-info')
    const inputPassword = document.querySelector('.password')

    if (inputUserInfo.value !== '' && inputPassword.value !== ''){
        mainPage.style.display = 'none'
        newsFeedPage.style.display = 'grid'
    } else {
        goToLoginPage()
        loginModal.style.display = 'block'
    }
})

cancelButton.addEventListener('click', () => {
    loginModal.style.display = 'none'

})

loginFormBtn.addEventListener('click', () => {
    if (loginUserPassword.value !== '' && loginUserPassword.value !== ''){
       loginPage.style.display = 'none'
        newsFeedPage.style.display = 'block'
    } else {
        loginModal.style.display = 'block'
    }
})

// News feed page
// Post modal

postBtn.addEventListener('click', () => {
    modal.style.display = 'block'
    modalWrapper.classList.add('modal-wrapper-display')
})

const changeOpacity = (x) => {
    modalPostBtn.style.opacity = x
    modalFooterPlus.style.opacity = x
}
modalHeaderCancel.addEventListener('click', () => {
    modal.style.display = 'none'
    modalWrapper.classList.remove('modal-wrapper-display')

    if (modalInput.value !== ''){
        modalInput.value = ''
    }
    changeOpacity(.5)
})

modalInput.addEventListener('keypress',(e)=>{
    if (e.target.value !== ''){
        changeOpacity(1   )
    }
})

modalInput.addEventListener('blur', (e) => {
    if (e.target.value === ''){
        changeOpacity(.5)
    }
})

//Sidebar
user.addEventListener('click', ()=> {
    sidebar.classList.add('sidebar-display')
    sidebarWrapper.classList.add('sidebar-wrapper-display')
})

sidebarX.addEventListener('click', ()=> {
    sidebar.classList.remove('sidebar-display')
    sidebarWrapper.classList.remove('sidebar-wrapper-display')
})



