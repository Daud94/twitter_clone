// DOM elements

const mainPage = document.querySelector('.main-page')
const loginPage = document.querySelector('.login-page')
const middleContent = document.querySelector('.middle-content')
const newsFeedPage = document.querySelector('.feeds-page')
const btnTop = document.querySelector('.btn-top')
const loginModal = document.querySelector('.login-modal')
const cancelButton = document.querySelector('.bi-x-circle')
const loginFormBtn = document.querySelector('.login-form-btn')
const loginUserInfo = document.querySelector('.login-user-info')
const loginUserPassword = document.querySelector('.login-user-password')

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

