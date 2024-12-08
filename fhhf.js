function  oddEven(){
    const input = document.getElementById('gum').value;
    const resultElement = document.getElementById('sasuke');
      

    const number = Number(input);
    if (number % 2 === 0) {
        resultElement.textContent = `${number} is even.`;
     
    } else {
        resultElement.textContent = `${number} is odd.`;
  
    }

  }


  const naruto = document.getElementById('naruto');


  naruto.addEventListener('click', () => {
    oddEven();
  })
