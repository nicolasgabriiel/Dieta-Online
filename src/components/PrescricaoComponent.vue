<template>
    <div>
      <h2>Adicionar Refeição</h2>
      <form @submit.prevent="adicionarRefeicao">
        <label for="titulo">Título:</label>
        <input type="text" v-model="titulo" id="titulo" required>
        <label for="horario">Horário:</label>
        <input type="time" v-model="horario" id="horario" required>
        <label for="alimento1">Alimento 1:</label>
        <input type="text" v-model="alimentos[0]" id="alimento1">
        <label for="alimento2">Alimento 2:</label>
        <input type="text" v-model="alimentos[1]" id="alimento2">
        <label for="alimento3">Alimento 3:</label>
        <input type="text" v-model="alimentos[2]" id="alimento3">
        <label for="alimento4">Alimento 4:</label>
        <input type="text" v-model="alimentos[3]" id="alimento4">
        <label for="alimento5">Alimento 5:</label>
        <input type="text" v-model="alimentos[4]" id="alimento5">
        <label for="obs">OBS:</label>
        <textarea v-model="obs" id="obs"></textarea>
        <button type="submit">Adicionar</button>
      </form>
      <div v-if="refeicoes.length">
        <h2>Refeições Adicionadas</h2>
        <div v-for="(refeicao, index) in refeicoes" :key="index" class="refeicao">
          <div class="titulo">{{ refeicao.titulo }} - {{ refeicao.horario }}</div>
          <div class="alimentos">
            <div v-for="(alimento, index) in refeicao.alimentos" :key="index">{{ alimento }}</div>
          </div>
          <div class="obs" v-if="refeicao.obs">{{ refeicao.obs }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        titulo: '',
        horario: '',
        alimentos: ['', '', '', '', ''],
        obs: '',
        refeicoes: []
      };
    },
    methods: {
      adicionarRefeicao() {
        // Criando um novo objeto de refeição com as informações preenchidas no formulário
        const novaRefeicao = {
          titulo: this.titulo,
          horario: this.horario,
          alimentos: this.alimentos.filter(a => a !== ''),
          obs: this.obs
        };
  
        // Adicionando a nova refeição na lista de refeições
        this.refeicoes.push(novaRefeicao);
  
        // Limpando o formulário
        this.titulo = '';
        this.horario = '';
        this.alimentos = ['', '', '', '', ''];
        this.obs = '';
      }
    }
  };
  </script>
  
<style>
  /* Botões */
  .button {
    background-color: #AC271E;
    color: #FFF;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .button:hover {
    background-color: #880d04;
  }

  /* Ícones e textos */
  .text {
    color: #555;
    font-size: 14px;
    font-weight: 400;
  }
  
  /* Backgrounds */
  body {
    background-color: #FDFDF2;
  }

  .container {
    background-color: #99C798;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
</style>
