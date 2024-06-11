console.log(banner);
banner.innerHTML = `
<div class="banner">
<div class="imageContainer"><img id="bannerLogo" src="../images/SwivelStudiosCroppedLogo.png"></img></div>
<nav>
<ul>
<li><a href='../index.html' class="headerLink">Home</a></li>
<li><a href='../clothingHome.html' class="headerLink">Clothing</a></li>
<li><a href='../blogs.html' class="headerLink">Blogs</a></li>
<li><a href= '../aboutUs.html' class="headerLink">About</a></li>
<li><a href= '../signUp.html' class="headerLink">Sign Up</a></li>
</ul>
</nav>
</div>
`
const header = document.querySelector("header");

let prevScrollPos = window.scrollY;
console.log(scrollY);

window.onscroll = function(){
    let currentScollPos = window.scrollY;

    if(prevScrollPos > currentScollPos){
        header.classList.remove('scroll');
    }
    else{
        header.classList.add("scroll");
    }
    prevScrollPos = currentScollPos;
}


