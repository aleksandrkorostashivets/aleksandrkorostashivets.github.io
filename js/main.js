"use strict";var items=document.querySelectorAll(".accordion button");function toggleAccordion(){for(var e=this.getAttribute("aria-expanded"),t=0;t<items.length;t++)items[t].setAttribute("aria-expanded","false");"false"==e&&this.setAttribute("aria-expanded","true")}items.forEach((function(e){return e.addEventListener("click",toggleAccordion)}));var header__burger=document.querySelector(".header__burger"),header_menu=document.querySelector(".header__menu"),back=document.querySelector("body"),header__list=document.querySelector(".header__list");header__burger.onclick=function(){header__burger.classList.toggle("active"),header_menu.classList.toggle("active"),back.classList.toggle("lock")},header__list.onclick=function(){header__list.classList.remove("active"),header_menu.classList.remove("active"),header__burger.classList.remove("active"),back.classList.toggle("lock")},window.addEventListener("scroll",(function(){document.querySelector("header").classList.toggle("header--sticky",window.scrollY>0)}));var string="I`m front-end developer Developer with over 4 years of experience. I have expirence with all stages of the development, and I`m create modern and responsive websites.",str=string.split(""),el=document.getElementById("hero-text");!function e(){str.length>0?el.innerHTML+=str.shift():clearTimeout(t);var t=setTimeout(e,50)}();