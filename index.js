const menu = document.getElementById('mobile-menu')
const openBtn = document.getElementById("open-btn")
const closeBtn = document.getElementById("close-btn")

const appAddress = "https://speedbuild-app.vercel.app/"

const bookDemo = () => {
    window.open('https://calendly.com/kbdemo1/30min', '_blank');
}

const openMenu=()=>{
    menu.style.setProperty("transform", "translateX(0%)")
    closeBtn.style.setProperty("display","block")
    openBtn.style.setProperty("display",'none')
    document.body.style.overflow = "hidden";
}

const closeMenu=()=>{
    menu.style.setProperty("transform", "translateX(100%)")
    closeBtn.style.setProperty("display","none")
    openBtn.style.setProperty("display",'block')
    document.body.style.overflow = "auto";
}

const openRegisterPage=()=>{
    window.open(appAddress+'register');
}

const openLoginPage=()=>{
    window.open(appAddress+'login');
}