<template>
  <header-component />
  <main class="bg">
    <section class="container">
      
      <div class="box">
        <h2>Avaliação Física</h2>
        <ul>
          <li>Armazene e acompanhe todas as medidas do seu paciente com facilidade</li>
          <li>Visualize todas as informações coletadas em uma tabela claramente organizada.</li>
          <li>Acompanhe a evolução de seu paciente através de gráficos intuitivos e fáceis de ler.</li>
        </ul>
        <router-link to="/formulario-avaliacao-fisica" class="no-underline">
          <button class="bnt2">vamos lá</button>
        </router-link>
      </div>
      
      <div class="box">
        <h2>Prescrição de Dieta</h2>
        <ul>
          <li>Insira pesos e alimentos para manter o seu controle alimentar sempre atualizado.</li>
          <li>Tenha uma lista de compras completa e organizada, sempre atualizada com os itens necessários para seguir sua dieta.</li>
        </ul>
        <router-link to="/formulario-dieta" class="no-underline">
          <button>vamos lá</button>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  components: { HeaderComponent },
  name: 'AplicacoesView'
}
</script>

<style scoped>
.bg {
  background-color: #99C798;
  width: 100%;
  height: calc(100vh - 102px);
}
.container{
  display: flex;
  justify-content: center;
}
.box{
  background-color: #FDFDF2 ;
  margin-top: 100px;
  width: 19%;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 6px #6d8063;
}
.box h2{
  text-align: center;
  margin: 30px 0 60px 0;
  text-transform: uppercase;
  font-size: 1.3rem;
  text-shadow: 2px 3px 5px #b8b8b8; 
  font-weight: bold;
}
.box ul{
  min-height: 400px;
}
li{
  list-style-position: inside;
  padding: 20px 40px;
  text-align: justify;
  box-sizing:content-box
}
button{
  background: #AC271E;
  border: none;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  padding: 1rem 3rem;
  cursor: pointer;
  border-radius: 10px;
  display: block;
  margin: 0px auto 50px auto;
  text-decoration-line: none;
  transition: .3s;
  box-shadow: 1px 4px 5px 0px #707070;
}
button:hover{
  background: #ee1505;
  color: #fff;
  scale: 1.05;
}
.no-underline {
   text-decoration: none;
}























/* MOVIMENTAÇÃO */
.container :nth-child(1).box {
  margin-right: 100px;
  transform: translateX(-300%);
  animation: move-in-right .7s ease-out forwards;
}
.container :nth-child(2).box {
  margin-left: 100px;
  transform: translateX(+300%);
  animation: move-in .7s ease-out forwards;
}
@keyframes move-in {
  from {   transform: translateX(+300%); }
  to {  transform: translateX(0); }
}
@keyframes move-in-right {
  from {  transform: translateX(-300%); } 
  to {   transform: translateX(0); }
}


</style>