fetch("https://api.github.com/users/Melsanz/repos")
.then((resp) => resp.json())
.then((data) =>{
    createCards(data);
})
.catch((erro) => console.log(erro));

function createCards(projects) {
    let cards = document.getElementById('cards');
    projects.forEach(card => {
      cards.innerHTML += /*hmtl*/
    `
    <div class="col">
      <div class="card h-100 mb-1">
        <div class="card-body">
        <h4 class="card-title">${card.name}</h4>
          <p class="card-text">
            ${card.description === null ? "Sem descripção" : card.description}
          </p>
        </div>
        <div class="card-footer">
          <a href="${card.html_url}" target="_blank" class="btn btn-dark">Repositorio</a>
        </div>
      </div>
    </div>
    `
    });
  }


//validar formulario //
  const formulario = document.querySelector('#formulario');
  const nameInput = document.querySelector('#nome');
  const emailInput = document.querySelector('#email');
  const assuntoInput = document.querySelector('#assunto');
  
  formulario.addEventListener("submit", (event) =>{
      event.preventDefault();
  
  
      //validar se o nome esta vazio
      if (nameInput.value === "") {
          alert("Por favor, preencher seu nome");
          return;
      }
  
      //validar se o e-mail esta completado
      if (emailInput.value === "" || !isEmailValid(emailInput.value)){
          alert("Por favor, preencher seu e-mail");
          return;
      }
  
      //validar assunto
      if(assuntoInput.value === ""){
          alert("Por favor, preencher o assunto");
          return;
      }

      //se esses campos estiverem completados, enviar!
      formulario.submit();
  })
  
  //function que valida e-mail
  
  function isEmailValid(email){
      //criar um regex para validar email
      const emailRegex = new RegExp(
          //usuario20@host.com.br
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
      );
  
      if (emailRegex.test(email)){
          return true;
      }
  
      return false;
  }
