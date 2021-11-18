document.addEventListener("mousemove",parallax);
       function parallax(e){
           this.querySelectorAll('.mobile,.eth,.eth2,.bag,.mon').forEach(mobile =>{
               const speed = mobile.getAttribute('data-speed')

               const x = (window.innerWidth - e.pageX*speed)/100
               const y = (window.innerWidth - e.pageY*speed)/100
               mobile.style.transform = `translateX(${x}px) translateY(${y}px)`
           })
       }


       const toggleButton = document.getElementsByClassName('toggle-button')[0]
       const navbarLinks = document.getElementsByClassName('menu')[0]

       toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
       })
       

    //    VanillaTilt.init(document.querySelector(".card"), {
	// 	max: 25,
	// 	speed: 400
	// });
	
	// //It also supports NodeList
	// VanillaTilt.init(document.querySelectorAll(".card"));