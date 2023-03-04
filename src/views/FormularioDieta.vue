<template>
    <div class="box">
        <HeaderComponent />
        <div class="prescricao-container">
            <div class="form-row">
                <label for="titulo">Título</label>
                <input type="text" id="titulo" v-model="titulo" placeholder="Título" required>
            </div>
            <div class="form-row">
                <label for="horario">Horário</label>
                <input type="time" id="horario" v-model="horario" placeholder="Horário" required>
            </div>
            <div class="form-row">
                <label for="alimento1">Alimento 1</label>
                <input type="text" id="alimento1" v-model="alimentos[0]" placeholder="Alimento 1">
                <label for="alimento2">Alimento 2</label>
                <input type="text" id="alimento2" v-model="alimentos[1]" placeholder="Alimento 2">
                <label for="alimento3">Alimento 3</label>
                <input type="text" id="alimento3" v-model="alimentos[2]" placeholder="Alimento 3">
                <label for="alimento4">Alimento 4</label>
                <input type="text" id="alimento4" v-model="alimentos[3]" placeholder="Alimento 4">
                <label for="alimento5">Alimento 5</label>
                <input type="text" id="alimento5" v-model="alimentos[4]" placeholder="Alimento 5">
            </div>
            <div class="form-row">
                <label for="obs">OBS</label>
                <textarea id="obs" v-model="obs" placeholder="OBS"></textarea>
            </div>
            <div class="form-row">
                <button type="submit" class="button" @click="adicionarRefeicao()">Adicionar</button>
            </div>
        </div>
        <div v-if="refeicoes.length > 0" class="container">
            <h2>Prescrição de Dieta</h2>
            <div v-for="(refeicao, index) in refeicoes" :key="index" class="refeicao">
                <div class="titulo" >{{ refeicao.titulo }} - {{ refeicao.horario }}</div>
                <div class="alimentos">
                    <div v-for="(alimento, index) in refeicao.alimentos" :key="index">{{ alimento }}</div>
                </div>
                <div class="obs">{{ refeicao.obs }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
export default {
    name: 'Formulario-Dieta',
    components: {
        HeaderComponent
    },
    data() {
        return {
            titulo: "",
            horario: "",
            alimentos: ["", "", "", "", ""],
            obs: "",
            refeicoes: []
        };
    },
    methods: {
        adicionarRefeicao() {
            // Criando um novo objeto de refeição com as informações preenchidas no formulário
            const novaRefeicao = {
                titulo: this.titulo,
                horario: this.horario,
                alimentos: this.alimentos.filter(a => a !== ""),
                obs: this.obs
            };
            // Adicionando a nova refeição na lista de refeições e limpando os campos do formulário
            this.refeicoes.push(novaRefeicao);
            this.titulo = "";
            this.horario = "";
            this.alimentos = ["", "", "", "", ""];
            this.obs = "";
        }
    }
}
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.prescricao-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70vw;
    margin: 3rem auto;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
    width: 80vw;
    padding: 2rem 0;
}

.form {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f3f3f3;
}

.form-row {
    margin-bottom: 20px;
    width: 70vw;
}

input[type="text"],
input[type="time"],
textarea {
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-shadow: 2px 2px 2px #ccc;
}

textarea {
    height: 100px;
}

.button {
    padding: 10px 20px;
    background-color: #AC271E;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}

.button:hover {
    background-color: #ee1505;
}

.refeicao {
    box-shadow: 0px 0px 3px 3px #ccc;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    width: 350px;
    text-align: center;
}

.titulo {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 700;
}

.alimentos {
    margin-bottom: 10px;
}

.obs {
    margin-top: 10px;
    font-style: italic;
}
</style>



