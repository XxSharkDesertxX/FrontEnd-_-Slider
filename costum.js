// drop donw navbar
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

//slidet
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// password change 
const PasswordChange = document.querySelector(".password_change");
const eyes = document.querySelector(".eyes");
const password_second = document.querySelector(".second_password");
const title_password = document.querySelector("#change_color_text_pasword");
let data = true;
eyes.addEventListener("click",function () {
    if (data == true) {
      PasswordChange.type="text";
      data= false;
    } else {
      PasswordChange.type="password";
      data=true;
    }
});


password_second.addEventListener("keyup",function () {
  
  if (password_second.value === PasswordChange.value) {
    title_password.style.color="green";
    title_password.textContent="Password is ok";
  } else {
    title_password.textContent="Password";
    title_password.style.color="rgb(165, 52, 52)";
  }

});


const reset_value = document.querySelector(".cancle");
const email = document.querySelector("#email_change");
reset_value.addEventListener("click",function () {
  PasswordChange.value=null;
  password_second.value=null;
  title_password.textContent="Password";
  title_password.style.color="";
  email.value=null;
});