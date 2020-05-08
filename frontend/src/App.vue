<template>
    <div>
        <Header/>
        <router-view/>
    </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';

export default {
    name: 'App',

    components: {
        Header
    }
}
</script>

<style>
    :root{
        --light-purple: #e14aff;
        --dark-purple: #8e0aa8;
        --light-blue: #81b7e9;
        --light-red: #f73e5d;
        --white: #fff;
        --dark: #333;
        --grey: #ccc;
    }

    *,
    *::after,
    *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        height: 100vh;
        font-family: 'Manrope', sans-serif;
        background-image: linear-gradient(to right bottom, var(--light-purple), var(--light-blue));
    }

    /* Container Component Class */
    .container{
        max-width: 720px;
        height: 500px;
        margin: 30px auto 0 auto;
        padding: 30px;

        background-color: var(--white);
        font-size: 14px;
        border-radius: 5px;
        box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.40);
        overflow-x: scroll;
    }

</style>