<template>
    <div class="box">
        <HeaderComponent />
        <div class="prescricao-container">
            <h1>Avaliação Física</h1>
            <form>
                <div class="form-row">
                    <label for="titulo">Nome</label>
                    <input type="text" id="titulo" placeholder="Digite aqui o seu nome" v-model="Nome" required>
                </div>
                <div class="form-row">
                    <label for="titulo">Idade</label>
                    <input type="text" id="titulo" placeholder="Digite aqui a sua idade" v-model="Idade" required>
                </div>
                <div class="form-row">
                    <label for="titulo">Peso Atual (Kg)</label>
                    <input type="text" id="titulo" placeholder="Digite aqui o seu peso"  v-model="Peso" required>
                </div>
                <div class="form-row">
                    <label for="horario">Altura Atual (cm)</label>
                    <input type="text" id="altura" placeholder="Digite aqui a sua altura" v-model="Altura" required>
                </div>
                <div class="form-row">
                    <label for="horario">Data da Avaliação</label>
                    <input type="date" id="data" placeholder="Digite aqui a data da sua avaliação" v-model="data" required>
                </div>
          
                <div class="form-row">
                    <button type="button" class="button" @click="gerarAvaliacao"  >Fazer Avaliação</button>
                </div>
            </form>
        </div>
    </div>
    <div class="prescricao-container" v-html="textoDeAvaliacao"></div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
    name: 'Formulario-Avaliacao-Fisica',
    components: {
        HeaderComponent
    },
    data(){
        return{
            Nome: "",
            Idade: "",
            Peso: "",
            Altura: "",
            textoDeAvaliacao: '',
            hoje: new Date(),
            data: new Date().toISOString().substr(0, 10),
            avaliacoes: []
        }
    },
    methods:{
        gerarAvaliacao(){
            console.log(this.hoje.toISOString().substr(0, 10),)
                this.textoDeAvaliacao = 
                `
                <h1>Paciente ${this.Nome}</h1>
                <h1>Idade ${this.Idade}</h1>
                <table>
                    <tr>
                        <td>Parametro</td>
                        <td> ${this.data}</td>
                    </tr>
                    <tr>
                        <td>Peso</td>
                        <td> ${this.Peso}</td>
                    </tr>
                    <tr>
                        <td>Altura</td>
                        <td> ${this.Altura}</td>
                    </tr>
                </table>
                
                `
                // Criando um novo objeto de refeição com as informações preenchidas no formulário
                const novaAvaliacao = {
                    Nome: this.Nome,
                    Idade: this.Idade,
                    Altura: this.Altura,
                    Peso: this.Peso,
                    data: this.data,
                };
                // Adicionando a nova refeição na lista de refeições e limpando os campos do formulário
                this.avaliacoes.push(novaAvaliacao);
                this.Nome = "";
                this.Idade = "";
                this.Altura = '';
                this.Peso = "";
                console.log(this.avaliacoes)
        }
    },
   
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
input[type="date"],
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
    transition: .2s;
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



