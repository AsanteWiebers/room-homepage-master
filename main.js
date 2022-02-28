
// mobile menu toggle

function myFunction() {
    
    var x = document.getElementById("myLinks");
    if(x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// scroll animation 

ScrollReveal({
    reset: true
});

ScrollReveal().reveal('.logo', { duration: 2000 });
ScrollReveal().reveal('.hamburger-icon', { duration: 2000 });


ScrollReveal().reveal('.hero_title',
    { distance: '50px'} ,
   
);

ScrollReveal().reveal('.hero_title',
    { duration: 2500 }

);



// options - delay, duration , interval 