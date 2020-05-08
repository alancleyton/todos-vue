<template>
    <header>
        <nav class="navbar">
            <h4 class="nav-logo">
                <router-link to="/">Todo App</router-link>
            </h4>

            <div class="navbar-nav">
                <ul>
                    <li class="nav-item">
                        <router-link to="/sobre">Sobre</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/projetos">Projetos</router-link>
                    </li>
                </ul>
            </div>

        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    header{
        height: 55px;
        max-width: 720px;
        background-color: var(--white);

        margin: 70px auto 0 auto;
        box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.40);
        border-radius: 5px;

        padding: 0 10px;

        display: flex;
        align-items: center;
    }

    .navbar{
        display: flex;
        align-items: center;
    }

    .nav-logo a{
        text-decoration: none;
        color: var(--dark);
        font-size: 18px;
        font-weight: bolder;
    }

    .nav-item{
        display: inline-block;
        margin: 0 10px;      
    }

    .nav-item a{
        text-decoration: none;
        color: var(--dark);
    }

</style>
