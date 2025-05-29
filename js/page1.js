document.addEventListener('DOMContentLoaded', () => {

    const toSplit = document.querySelector('[data-split]')
    const content = toSplit.innerText
    const contentLength = content.length

    const PPC = 10 // Pixels per character...
    const BUFFER = 40


    document.documentElement.style.setProperty('--buffer', BUFFER)
    document.documentElement.style.setProperty('--ppc', PPC)
    document.documentElement.style.setProperty('--pad', 8)
    document.documentElement.style.setProperty('--content-length', contentLength + 2)

    const words = toSplit.innerText.split(' ')
    toSplit.innerHTML = ''

    let cumulation = 10
    words.forEach((word, index) => {
    const text = Object.assign(document.createElement('span'), {
        innerHTML: `<span>${word} </span>`,
        style: `
        --index: ${index};
        --start: ${cumulation};
        --end: ${cumulation + word.length};
        `,
    })
    text.dataset.index = index
    text.dataset.start = cumulation
    text.dataset.end = cumulation + word.length
    cumulation += word.length + 1
    toSplit.appendChild(text)
    })

    if (!CSS.supports('animation-timeline: scroll()')) {
    gsap.registerPlugin(ScrollTrigger)
    console.info('GSAP ScrollTrigger: Registered')
    // Animate the words
    for (const word of toSplit.children) {
        gsap.fromTo(
        word,
        {
            '--active': 0,
        },
        {
            '--active': 1,
            ease: 'steps(1)',
            scrollTrigger: {
            trigger: '.reader',
            start: `top top-=${word.dataset.start * PPC}`,
            end: `top top-=${word.dataset.end * PPC}`,
            scrub: true,
            },
        }
        )
    }
    // Animate the header
    gsap.to('header', {
        scale: 0.8,
        scrollTrigger: {
        trigger: 'header',
        start: 'top top',
        end: 'bottom top',
        scrub: true
        }
    })
    }

    // Theme toggling
    const TOGGLE = document.querySelector(".theme-toggle");

    const SWITCH = () => {
    const isDark = TOGGLE.matches("[aria-pressed=true]") ? false : true;
    TOGGLE.setAttribute("aria-pressed", isDark);
    document.documentElement.dataset.theme = isDark ? 'light' : 'dark'
    }

    const TOGGLE_THEME = () => {
    if (!document.startViewTransition) SWITCH()
    document.startViewTransition(SWITCH)
    };

    document.documentElement.dataset.theme = 'dark'
    TOGGLE.addEventListener("click", TOGGLE_THEME);

});


$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });

  
