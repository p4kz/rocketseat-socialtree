let list = document.querySelectorAll('li, .mainContainer, img');
let bg = document.querySelector('.mainContainer');
list.forEach(elements =>{
    elements.addEventListener('mouseenter', function
    (event){
        let color = event.target.getAttribute
        ('data-color');
        bg.style.backgroundColor = color;
    })

    elements.addEventListener('mouseleave', function
    (event){
        
        bg.style.backgroundColor = '#fff';
    })
})

VanillaTilt.init(document.querySelectorAll
    ("li, img, .socialmedia, .mainContainer"),{
    max: 25,
    speed: 400,
    glare: false,
    "max-glare": 0,
    });