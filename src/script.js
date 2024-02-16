const menu = document.querySelector(".pr-2")
const submenu = document.querySelectorAll(".ant-menu-submenu")
const menuT = document.querySelectorAll(".ant-menu-title-content")
const arrow = document.querySelectorAll(".ant-menu-submenu-arrow")
const menuStatus = document.querySelector(".menuStatus")

menu.addEventListener('click', ()=>{
    if(menuStatus.value == "1")
    {
    document.querySelector(".back").classList.remove("greyActive")
    document.querySelector(".ant-layout-sider").classList.add("ant-layout-sider-collapsed")
    document.querySelector(".ant-layout-sider").classList.remove("ant-layout-sider-uncollapsed")
    document.querySelector(".layout-curr").style = "margin-left: 80px; padding: 40px 20px 20px; transition: all 200ms linear 0s;";
    
    for(let i = 0; i < submenu.length; i++)
    {
        submenu[i].classList.add("ant-menu-submenu-vertical")
        submenu[i].classList.remove("ant-menu-submenu-inline")
    }
    for(let i = 0; i < menuT.length; i++)
    {
        menuT[i].style ="display:none";
    }
    for(let i = 0; i < arrow.length; i++)
    {
        arrow[i].style ="display:none";
    }
    document.getElementById("rc-menu-uuid-04926-1-launchpads-menu-popup").style = "display:none";
    menuStatus.value = 2;
    console.log(menuStatus.value);
    }
    else
    {
    document.querySelector(".back").classList.add("greyActive")
    document.querySelector(".layout-curr").style = "margin-left: 200px; padding: 40px 20px 20px; transition: all 200ms linear 0s;"
    document.querySelector(".ant-layout-sider").classList.remove("ant-layout-sider-collapsed")
    document.querySelector(".ant-layout-sider").classList.add("ant-layout-sider-uncollapsed")
    
    for(let i = 0; i < submenu.length; i++)
    {
        submenu[i].classList.remove("ant-menu-submenu-vertical")
        submenu[i].classList.add("ant-menu-submenu-inline")
    }
    for(let i = 0; i < menuT.length; i++)
    {
        menuT[i].style ="display:block";
    }
    for(let i = 0; i < arrow.length; i++)
    {
        arrow[i].style ="display:block";
    }
    document.getElementById("rc-menu-uuid-04926-1-launchpads-menu-popup").style = "display:block";
    menuStatus.value = 1;
    console.log(menuStatus.value);
    }
    



});