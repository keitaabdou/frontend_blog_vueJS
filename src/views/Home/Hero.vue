<template>
    <div class="hero-height relative z-0">
        <img src="/images/hero.jpg" alt="hero" class="block w-full h-full object-cover"> 
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="px-4 sm:px-0 absolute inset-0 text-white">
            <div class="container mt-10 px-8 mx-auto h-full flex flex-col justify-center">
               <div class="">Bienvenu sur</div>
               <div class="mt-1 text-6xl font-bold">Mon blog</div>
               <div class="mt-2 sm:w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                   Nemo eos provident, neque deserunt repellat mollitia accusamus 
                   dolorum est id libero optio et deleniti sit illo accusantium 
                   magni amet quae quo?</div>
                <div class="mt-8 text-primary mb-20">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {},

    setup(){

    }
};
</script>