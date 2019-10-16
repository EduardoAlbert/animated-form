const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('section');
const h1 = document.querySelector('h1')

btnLogin.addEventListener('click', event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll('.input-block input')];

  fields.forEach( field => {
    if (field.value == '') form.classList.add('validate-error');
  });

  const formError = document.querySelector('.validate-error');
  if (formError) {
    formError.addEventListener('animationend', event => {
      if (event.animationName == 'error') {
        formError.classList.remove('validate-error')
      }  
    });
  } else {
    form.classList.add('form-hide')
    h1.classList.add('h1-hide')
  } 
});

form.addEventListener('animationstart', event => {
  if (event.animationName === 'down') {
    document.body.style.overflow = 'hidden'
  }
})

form.addEventListener('animationend', event => {
  if (event.animationName === 'down')
    form.style.display = 'none'
    document.body.style.overflow = 'none'
})


/* Background Squares*/

const ulSquares = document.querySelector('ul.squares');

for ( let i = 0; i < 13; i++ ) {
  const li = document.createElement('li');

  const random = (min, max) => Math.random() * (max - min) + min
  
  const size = Math.floor(random(10, 120));
  const position1 = random(68, 99);
  const position2 = random(1, 32);
  i == 0 ? delay = 1 : delay = random(5, 0.1);
  const duration = random(24, 12);
  let position = Number
  if (i % 2 == 0) {
    position = position1;
  } else {
    position = position2
    li.style.animationDirection = 'reverse';
  }

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  li.style.left = `${position}%`;
  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier: ${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}`;

  ulSquares.appendChild(li);
}