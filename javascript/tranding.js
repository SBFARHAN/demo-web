// ! Image Slider Pure Javascript
const bg_image = document.querySelector(".slider_container").children;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", function () {
    prevSlide();
    updateCircleIndicator();
    resetTimer()
});
next.addEventListener("click", function () {
    nextSlide();
    updateCircleIndicator();
    resetTimer()
});

function prevSlide() { 
    if (index == 0) {
        index = bg_image.length - 1;
    } else { 
        index--;
    }
    changeSlide();
}

function nextSlide() { 
    if (index == bg_image.length - 1) {
        index = 0;
    } else { 
        index++;
    }
    changeSlide();
}

function changeSlide() { 
    for ( let i = 0; i < bg_image.length; i++) { 
        bg_image[i].classList.remove("active_slider");
    }
    bg_image[index].classList.add("active_slider");
}

// ? Circle Section create

function circleIndicator() { 
    for (let i = 0; i < bg_image.length; i++) { 
        const div = document.createElement("div");
        // div.innerHTML = i + 1;
        div.setAttribute("onclick", "indicateSlide(this)");
        div.id = i;
        if (i == 0) { 
            div.className = "active_dotted";
        }
        indicator.appendChild(div);
    }
}
circleIndicator();

function updateCircleIndicator() { 
    for (let i = 0; i < indicator.children.length; i++) { 
        indicator.children[i].classList.remove("active_dotted");       
    }
    indicator.children[index].classList.add("active_dotted");
}

function indicateSlide(element) { 
    index = element.id;
    changeSlide();
    updateCircleIndicator();
}

function autoPlaySlide() { 
    nextSlide();
    updateCircleIndicator()
}

function resetTimer() { 
    clearInterval(timerSet);
    timerSet = setInterval(autoPlaySlide, 10000);
}

let timerSet = setInterval(autoPlaySlide, 10000);

//! Product Image Slider Jquery
$('.owl-carousel').owlCarousel({
    loop: true,
    dots: true,
    margin: 0,
    responsiveClass: true,
    items: 3,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        630: {
            items: 2,
            nav: true
        },
        890: {
            items: 3,
            nav: true
        }
    }
});