<template>

    <div class="home-background">
        <div class="home-container">
            <div class="home-titulo">
                <h1>Estamos prontos para atender duas necessidades</h1>
            </div>
            <div class="home-topicos">
                <div>
                    <fa icon="person-walking" />
                    <p>Emagrecimento: Perca peso de forma saudável e equilibrada;</p>
                </div>
                <div>
                    <fa icon="heart" />
                    <p>Melhoria da saúde: Melhore a saúde geral, incluindo a prevenção e tratamento de doenças;</p>
                </div>
                <div>
                    <fa icon="dumbbell" />
                    <p>Hipertrofia: Aumente sua massa muscular de acordo com seu objetivo; </p>
                </div>
            </div>
            <div class="home-button">
                <button>COMEÇAR</button>
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        name: 'home-component'
    }

</script>

<style>
    @font-face {
        font-family: 'Poppins';
        src: url('../../public/fonts/Poppins-Regular.ttf');
}

    *{
        margin: 0;
        padding: 0;
        font-family: 'Poppins';
    }

    .home-background{
        background-image: url(../../public/img/banner-home.jpeg);
        height: 100vh;
        max-width: 100vw;
        background-size: cover;
    }

    .home-container{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 50%;
        max-width: 600px;
        height: 100%;
        align-items: center;
        justify-content: center;
        margin-left: 2rem;

        
    }

    .home-titulo h1{
        text-align: center;
        color: #555;

    }

    .home-topicos{
        margin: 1rem;
        text-align: left;
    }

    .home-topicos div{
        display: flex;
    }

    .home-topicos div svg{
        margin: 2rem;
        width: 35px;
        justify-content:  center;
        scale: 2;
        color: #555;
    }

    .home-topicos div p{
        display: flex;
        align-items:  center;
    }

    .home-button button{
        background: #AC271E;
        border: none;
        color: #fff;
        margin: 1rem;
        text-align: center;
        text-transform: uppercase;
        width: 200px;
        height: 60px;
        cursor: pointer;
        transition: all 0.2s;
        
    }

    .home-button button:hover{
        background: #880d04;
        transition: 1s;
        transform: scale(1.1);
}


</style>