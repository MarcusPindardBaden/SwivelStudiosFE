console.log(banner);
banner.innerHTML = `
<div class="banner">
<a href="index.html"><img src="images/SwivelStudiosCroppedLogo.png" id="bannerLogo"></img></a>
<nav>
<ul>
<li><a href="blogsPage.html"><button class="bannerButton" id="blogButton">Blogs</button></a></li>
<li><a href="signUp.html"><button class="bannerButton" id="signUpButton">Sign Up</button></a></li>
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