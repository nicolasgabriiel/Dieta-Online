<template>
    <div class="header">
        <router-link to="/" class="routerLink">
        <h1 class="logo">Dieta Online</h1>
        </router-link>
    </div>
</template>

<script>
    export default{
        name: 'home-component'
    }
</script>

<style>
    .header{
        align-items: center;
        border-bottom: 2px solid #444;
        display: flex;
        height: 100px;
        justify-content: center;
        width: 100%;
        background: #fdfdf2;

    }

    .header h1{
        color: #444;
        text-transform: uppercase;
        text-align: center;
    }
    .logo{
        cursor: pointer;
    }
    .routerLink{
     text-decoration: none;
 }

    
</style>