<template>
  <header-component />
  <main class="bg">
    <section class="container">
      
      <div class="box">
        <h2>Avaliação Fisica</h2>
        <ul>
          <li>Armazene e acompanhe todas as medidas do seu paciente com facilidade</li>
          <li>Visualize todas as informações coletadas em uma tabela claramente organizada.</li>
          <li>Acompanhe a evolução de seu paciente através de gráficos intuitivos e fáceis de ler.</li>
        </ul>
        <router-link to="/">
          <button>vamos lá</button>
        </router-link>
      </div>
      
      <div class="box">
        <h2>Prescrição de Dieta</h2>
        <ul>
          <li>Insira pesos e alimentos para manter o seu controle alimentar sempre atualizado.</li>
          <li>Tenha uma lista de compras completa e organizada, sempre atualizada com os itens necessários para seguir sua dieta.</li>
        </ul>
        <router-link to="/">
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
  justify-items: center;
}
.box{
  background-color: #FDFDF2 ;
  margin-top: 100px;
  width: 15%;
  box-sizing: content-box;
}
.box h2{
  text-align: center;
  margin: 30px 0 60px 0;
}
li{
  list-style-position: inside;
  margin: 10px 20px;
  text-align: justify;
}
button{
  background: #AC271E;
        border: none;
        color: #fff;
        margin: 1rem;
        text-align: center;
        text-transform: uppercase;
        width: 200px;
        height: 60px;
        cursor: pointer;
        border-radius: 3px;
        position: relative;
        bottom: 100px;
}






















/* MOVIMENTAÇÃO */
.container :nth-child(1).box {
  margin-right: 100px;
  transform: translateX(-100%);
  animation: move-in-right 1s ease-out forwards;
}
.container :nth-child(2).box {
  margin-left: 100px;
  transform: translateX(+100%);
  animation: move-in 1s ease-out forwards;
}
@keyframes move-in {
  from {   transform: translateX(+100%); }
  to {  transform: translateX(0); }
}
@keyframes move-in-right {
  from {  transform: translateX(-100%); } 
  to {   transform: translateX(0); }
}


</style>