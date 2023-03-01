<template>
    <div class="box">
    <HeaderComponent />
    <div class="prescricao-container">
        <h1>Avaliação Física</h1>
        <div class="form-row">
        <label for="titulo">Nome</label>
        <input type="text" id="titulo"  placeholder="Digite aqui o seu nome" required>
        </div>
        <div class="form-row">
        <label for="titulo">Idade</label>
        <input type="text" id="titulo"  placeholder="Digite aqui a sua idade" required>
        </div>
        <div class="form-row">
        <label for="titulo">Peso Atual (Kg)</label>
        <input type="text" id="titulo"  placeholder="Digite aqui o seu peso" required>
        </div>
        <div class="form-row">
        <label for="horario">Altura Atual (cm)</label>
        <input type="text" id="altura"  placeholder="Digite aqui a sua altura" required>
        </div>
        <div class="form-row">
        <button type="submit" class="button" >Fazer Avaliação</button>
        </div>
    </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
    name: 'Formulario-Avaliacao-Fisica',
    components:{
        HeaderComponent
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

    .prescricao-container{
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

    .form{
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #f3f3f3;
    }

    .form-row {
        margin-bottom: 20px;
        width: 70vw;
    }

    input[type="text"], input[type="time"], textarea {
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



