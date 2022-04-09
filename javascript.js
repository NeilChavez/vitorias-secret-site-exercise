// crea una funcion que selectiona los elementos, que se le pase un parametro(la clase o id del tag)
const selectElement = selector =>{
  const element = document.querySelector(selector);
if(element) return element;
throw new Error(`Algo no funciono, asegurate que el ${selector} esta escrito correctamente`)
}

// open the menu


const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
  const mobileMenu = selectElement('.menu');

  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');

}


menuToggleIcon.addEventListener('click', toggleMenu);

// Switch Theme Light-Night

const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn')


themeToggleBtn.addEventListener('click', () =>{
  bodyElement.classList.toggle('light-theme')
})