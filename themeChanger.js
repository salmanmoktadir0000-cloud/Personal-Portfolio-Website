const darkBtn = document.querySelector('.dark-mode-icon-dark');
const lightBtn = document.querySelector('.dark-mode-icon-light');
const systemBtn = document.querySelector('.dark-mode-icon-system');
const body = document.body;

const buttons = [darkBtn, lightBtn, systemBtn];


function highlightButton(activeBtn) {
  buttons.forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

const savedTheme = localStorage.getItem('theme') || 'system';


if (savedTheme === 'darkM') body.classList.add('darkM');
else if (savedTheme === 'lightM') body.classList.add('lightM');
else body.classList.remove('darkM', 'lightM');


if (savedTheme === 'darkM') highlightButton(darkBtn);
else if (savedTheme === 'lightM') highlightButton(lightBtn);
else highlightButton(systemBtn);


darkBtn.addEventListener('click', () => {
  body.classList.remove('lightM');
  requestAnimationFrame(() => body.classList.add('darkM'));
  localStorage.setItem('theme', 'darkM');
  highlightButton(darkBtn);
});


lightBtn.addEventListener('click', () => {
  body.classList.remove('darkM');
  requestAnimationFrame(() => body.classList.add('lightM'));
  localStorage.setItem('theme', 'lightM');
  highlightButton(lightBtn);
});


systemBtn.addEventListener('click', () => {
  body.classList.remove('darkM', 'lightM');
  localStorage.setItem('theme', 'system');
  highlightButton(systemBtn);
});





// load more button


const posts = document.querySelectorAll('.post-card');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let visibleCount = 5;

// show first 5
for (let i = 0; i < visibleCount; i++) {
    posts[i].style.display = "flex";
}

loadMoreBtn.addEventListener('click', function () {

    let showNext = visibleCount + 3;

    for (let i = visibleCount; i < showNext; i++) {
        if (posts[i]) {
            posts[i].style.display = "flex";
        }
    }

    visibleCount = showNext;

    if (visibleCount >= posts.length) {
        loadMoreBtn.style.display = "none";
    }
});



document.getElementById("contactBtn").addEventListener("click", function(e) {
    e.preventDefault();

    document.getElementById("contact-sections").scrollIntoView({
        behavior: "smooth"
    });
});

// scroll



const scrollBtn = document.getElementById("scrollBtn");
const progressCircle = document.getElementById("progressCircle");

window.addEventListener("scroll", () => {

    // progress circle calculation
    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let progress = scrollTop / docHeight;
    let offset = 126 - (126 * progress);
    progressCircle.style.strokeDashoffset = offset;

    // show / hide button
    if (scrollTop > 50) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

// click → go to top
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


