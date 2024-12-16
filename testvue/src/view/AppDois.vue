
<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <!-- <p class="lead">Treinando a manipulação de formulários</p> -->
          <router-link to="/app-tres">
            <button type="button" class="btn btn-primary btn-sm">Home</button>
          </router-link>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <!-- formulario -->
        <div class="col-sm-6">

          <h3>Preencha abaixo</h3>

          <form>

            <div class="form-group">
              <label>Nome:</label>
              <input type="text" class="form-control" placeholder="Seu nome">
            </div>

            <div class="form-group">
              <label>Endereço de email:</label>
              <input type="email" class="form-control" placeholder="Seu email">
            </div>

            <div class="form-group">
              <label>Idade:</label>
              <input type="number" class="form-control" placeholder="Sua idade">
            </div>

            <div class="form-group">

              <p>Gênero:</p>

              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" value="Masculino">
                <label class="form-check-label">Masculino</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="radio" class="form-check-input" value="Feminino">
                <label class="form-check-label">Feminino</label>
              </div>

            </div>

            <div class="form-group">
              <label>Ocupação:</label>
              <select class="form-control" placeholder="Seu email">
                <option>Selecione uma opção...</option>
              </select>
            </div>

            <div class="form-group">

              <p>Tecnologias:</p>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="JavaScript">
                <label class="form-check-label">JavaScript</label>
              </div>

              <div class="form-check form-check-inline" value="Vue JS">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label">Vue JS</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vuex">
                <label class="form-check-label">Vuex</label>
              </div>

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input" value="Vue Router">
                <label class="form-check-label">Vue Router</label>
              </div>

            </div>

            <div class="form-group">
              <label>Resumo de perfil:</label>
              <textarea class="form-control" placeholder="Conte-nos um pouco sobre você..."></textarea>
            </div>

            <div class="form-group">

              <div class="form-check form-check-inline">
                <input type="checkbox" class="form-check-input">
                <label class="form-check-label">Receber notificações por email</label>
              </div>

            </div>

            <button type="button" class="btn btn-primary btn-sm">Resetar</button>
            <button type="button" class="btn btn-primary btn-sm">Enviar</button>


          </form>

        </div>

      </div>

    </div>

  </div>
</template>


<style scoped>
  .btn {
    margin-right: 25px;
  }

  .h3{
    align-items: center;
    justify-content: center;
    height: 7vh;
   text-align: center;
  }

  .form-group{
   display: flex;
   align-items: center;
   justify-content: center;
   height: 7vh;
   text-align: center;
  }
</style>
