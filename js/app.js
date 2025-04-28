// =====================
// Accordion
// =====================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach(i => i.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});


// ========================
//   ScrollTO TOp Button
// ========================

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll',()=>{
    if(window.scrollY > 300)
    {
        scrollToTopBtn.style.display = "flex";
        console.log("I'm working");
    }
    else 
    {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
});

// =========================
// Hamburger menu active
// =========================

const hamBurger = document.querySelector('#hamburger');

const navigation = document.querySelector('.header__navigation');

const navMenu = document.querySelector('.header__navigation-menu');

hamBurger.addEventListener('click',()=>{

    navigation.classList.toggle('active');
});

navMenu.addEventListener('click',()=>{

    navigation.classList.toggle('active');
});


// =====================
// Load more card
// =====================

const loadMoreBtn = document.getElementById("load__morebtn");

const extraCards = document.querySelectorAll(".extra-card");

loadMoreBtn.addEventListener('click',()=>{
  extraCards.forEach(card => {
    card.style.display ='block';
  })
  loadMoreBtn.style.display = 'none';
})