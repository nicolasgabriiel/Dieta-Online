<template>
    <div class="footer">
        <div class="info">
            <a href="https://linkedin.com/in/geisson-chagas" target="_blank">
                <fa class="icons" icon="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/geissonchagas" target="_blank">
                <fa class="icons" icon="fa-brands fa-github" />
            </a>
            <h5>Geisson Chagas</h5>
        </div>
        <div class="info">
            <h5>Nicolas Gabriel</h5>
            <a href="https://www.linkedin.com/in/nicolasgabriiel/" target="_blank">
                <fa class="icons" icon="fa-brands fa-linkedin" />
            </a>
            <a href="https://github.com/nicolasgabriiel" target="_blank">
                <fa class="icons" icon="fa-brands fa-github" />
            </a>
        </div>
    </div>

</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    export default{
        name: 'footer-home',
        components: {
            fa: FontAwesomeIcon
        }
    }
</script>

<style>

    .footer{
        align-items: center;
        background: #fdfdf2;
        color: #444;
        display: flex;
        height: 150px;
        justify-content: center;
        border-block-start: 2px solid #444 ;

    }

    .info{
        align-items: center;
        display: flex;
        margin: 0 5rem;
        scale: 1.5;
        border-block-end: 1px solid #444;
    }

    .info .icons{
        margin: 0 1rem 0 1rem;
        color: #444;
        scale: 1.25;
        transition: .3s;
    }
    
    .info .icons:hover{
        opacity: .6;
    }

</style>
