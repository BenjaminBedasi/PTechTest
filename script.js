window.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".main-content > div");
    const circles = document.querySelectorAll(".circle");

    const updateScrollIndicator = () => {
        const currentSectionIndex = Array.from(sections).findIndex((section) => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        });

        circles.forEach((circle, index) => {
            if (index === currentSectionIndex) {
                circle.classList.add("activeC");
            } else {
                circle.classList.remove("activeC");
            }
        });
    };

});

let hasScrolled = false;
let currentSectionIndex = 0;
const sections = document.querySelectorAll(".main-content > div");

document.querySelector('a[href="#sec1"]').addEventListener("click", function (e) {
    e.preventDefault();
    currentSectionIndex = 0;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    document.getElementById("s1").classList.add("active");
    document.getElementById("s2").classList.remove("active");
    document.getElementById("s3").classList.remove("active");
    document.getElementById("s4").classList.remove("active");
    document.getElementById("s5").classList.remove("active");
    document.getElementById("circle1").classList.add("activeC");
    document.getElementById("circle2").classList.remove("activeC");
    document.getElementById("circle3").classList.remove("activeC");
    document.getElementById("circle4").classList.remove("activeC");
});

document.querySelector('a[href="#sec2"]').addEventListener("click", function (e) {
    e.preventDefault();
    currentSectionIndex = 1;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    document.getElementById("s1").classList.remove("active");
    document.getElementById("s2").classList.add("active");
    document.getElementById("s3").classList.remove("active");
    document.getElementById("s4").classList.remove("active");
    document.getElementById("s5").classList.remove("active");
    document.getElementById("circle1").classList.remove("activeC");
    document.getElementById("circle2").classList.add("activeC");
    document.getElementById("circle3").classList.remove("activeC");
    document.getElementById("circle4").classList.remove("activeC");
});

document.querySelector('a[href="#sec3"]').addEventListener("click", function (e) {
    e.preventDefault();
    currentSectionIndex = 2;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    document.getElementById("s1").classList.remove("active");
    document.getElementById("s2").classList.remove("active");
    document.getElementById("s3").classList.add("active");
    document.getElementById("s4").classList.remove("active");
    document.getElementById("s5").classList.remove("active");
    document.getElementById("circle1").classList.remove("activeC");
    document.getElementById("circle2").classList.remove("activeC");
    document.getElementById("circle3").classList.add("activeC");
    document.getElementById("circle4").classList.remove("activeC");
});

document.querySelector('a[href="#sec4"]').addEventListener("click", function (e) {
    e.preventDefault();
    currentSectionIndex = 4;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    document.getElementById("s1").classList.remove("active");
    document.getElementById("s2").classList.remove("active");
    document.getElementById("s3").classList.remove("active");
    document.getElementById("s4").classList.add("active");
    document.getElementById("s5").classList.remove("active");
    document.getElementById("circle1").classList.remove("activeC");
    document.getElementById("circle2").classList.remove("activeC");
    document.getElementById("circle3").classList.remove("activeC");
    document.getElementById("circle4").classList.add("activeC");
    
});

document.querySelector('a[href="#sec5"]').addEventListener("click", function (e) {
    OpenPop();
});

// Attach click event listeners to the circles
document.getElementById('circle1').addEventListener("click", function (e) {
    e.preventDefault();
    currentSectionIndex = 0;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
});

document.getElementById('circle2').addEventListener("click", function (e) {
    e.preventDefault();
    currentSectionIndex = 1;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
});

document.getElementById('circle3').addEventListener("click", function (e) {
    e.preventDefault();
    currentSectionIndex = 2;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
});

document.getElementById('circle4').addEventListener("click", function (e) {
    e.preventDefault();
    currentSectionIndex = 4;
    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
});


function ChangeDisplayMode() {
    document.body.classList.toggle("dark-mode");
    const icon = document.querySelector(".icon-dark");
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
}

function toggleLogoText() {
    const logoText = document.querySelector(".logo-text");
    logoText.style.visibility = "visible";
    logoText.style.animation = "typing 2s steps(100, end)";

}

toggleLogoText();

const slideContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentSlide = 0;

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    slideContainer.style.transition = 'transform 1s ease-in-out';
    slideContainer.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    setTimeout(nextSlide, 5000); // Delay of 5 seconds between slides
}

setTimeout(nextSlide, 5000); 

function typing_animation() {
    let text_element = document.querySelector(".text");
    let text_array = text_element.innerHTML.split("");
    let text_array_slice = text_element.innerHTML.split(" ");
    let text_len = text_array.length;
    const word_len = text_array_slice.map((word) => {
        return word.length;
    })

    let timings = {
        easing: `steps(${Number(word_len[0] + 1)}, end)`,
        delay: 2000,
        duration: 2000,
        fill: 'forwards'
    }

    let cursor_timings = {
        duration: 700,
        iterations: Infinity,
        easing: 'cubic-bezier(0,.26,.44,.93)'
    }

    document.querySelector(".text_cursor").animate([
        {
            opacity: 0
        },
        {
            opacity: 0, offset: 0.7
        },
        {
            opacity: 1
        }
    ], cursor_timings);

    if (text_array_slice.length == 1) {
        timings.easing = `steps(${Number(word_len[0]/2)}, end)`;

        let reveal_animation = document.querySelector(".text_hide").animate([
            { left: '0%' },
            { left: `${(100 / text_len) * (word_len[0])}%` }
        ], timings);

        document.querySelector(".text_cursor").animate([
            { left: '0%' },
            { left: `${(1 / text_len) * (word_len[0])}%` }
        ], timings);

        reveal_animation.onfinish = () => {
            setTimeout(() => {
                document.querySelector('.text_hide').animate([
                    {left: '0%'}
                ], {
                    duration: 2000,
                    easing: 'cubic-bezier(.73,0,.38,.88)'
                });
                document.querySelector('.text_cursor').animate([
                    {left: '0%'}
                ], {
                    duration: 2000,
                    easing: 'cubic-bezier(.73,0,.38,.88)'
                });
                typing_animation();
            }, 1000);
        }
    } else {
        document.querySelector(".text_hide").animate([
            { left: '0%' },
            { left: `${(100 / text_len) * (word_len[0] + 1)}%` }
        ], timings);

        document.querySelector(".text_cursor").animate([
            { left: '0%' },
            { left: `${(100 / text_len) * (word_len[0] + 1)}%` }
        ], timings);
    }


    for (let i = 1; i < text_array_slice.length; i++) {
        const single_word_len = word_len[i];

        if (i == 1) {
            var left_instance = (100 / text_len) * (word_len[i - 1] + 1);
        }

        let timings_2 = {
            easing: `steps(${Number(single_word_len + 1)}, end)`,
            delay: (2 * (i + 1) + (2 * i)) * (1000),
            // delay: ((i*2)-1)*1000,
            duration: 2000,
            fill: 'forwards'
        }

        if (i == (text_array_slice.length - 1)) {
            timings_2.easing = `steps(${Number(single_word_len)}, end)`;
            let reveal_animation = document.querySelector(".text_hide").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i]*0.01))}%` }
            ], timings_2);

            document.querySelector(".text_cursor").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i]*0.001))}%` }
            ], timings_2);

            reveal_animation.onfinish = () => {
                setTimeout(() => {
                    document.querySelector('.text_hide').animate([
                        {left: '0%'}
                    ], {
                        duration: 2000,
                        easing: 'cubic-bezier(.73,0,.38,.88)'
                    });
                    document.querySelector('.text_cursor').animate([
                        {left: '0%'}
                    ], {
                        duration: 2000,
                        easing: 'cubic-bezier(.73,0,.38,.88)'
                    });
                    typing_animation();
                }, 1000);
            }
        } else {
            document.querySelector(".text_hide").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
            ], timings_2);

            document.querySelector(".text_cursor").animate([
                { left: `${left_instance}%` },
                { left: `${left_instance + ((100 / text_len) * (word_len[i] + 1))}%` }
            ], timings_2);
        }

        left_instance = left_instance + ((100 / text_len) * (word_len[i] + 1));
    }
}
typing_animation();

var burgFlag = true;
function toggleBurgNav(){
    if(!burgFlag){
        document.getElementById("BurgLinks").style.display = "block";
        burgFlag=true;
    }
    else{
        document.getElementById("BurgLinks").style.display = "none";
        burgFlag=false;
    }
}

function OpenPop(){
    document.getElementById("popup").style.display = "block";

}
function ClosePop(){
    document.getElementById("popup").style.display = "none";
}
