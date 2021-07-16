<template>
    <nav id="navbar" class="px-8 py-4 sm:py-6 bg-white  shadow sm:fixed w-full z-10 transition-colors duration-500" :class="{'sm:bg-transparent sm:shadow-none': !showWhiteBackrgound}">
        <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div class="w-full flex flex-row items-center justify-between">
                <div class="text-3xl font-bold">
                    <span :class="{'sm:text-white': !showWhiteBackrgound}">Keita</span>
                    <span class="text-primary">Karim</span>
                </div>
                <div>
                    <button v-show="!isVisible" class="sm:hidden" @click="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                     <button v-show="isVisible" class="sm:hidden" @click="toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="mt-4 sm:mt-0 w-full sm:space-x-4 sm:text-right sm:block" :class="{'hidden': !isVisible, 'sm:text-white': !showWhiteBackrgound}">
                
                <NavbarLink  to="/articles" label="Articles"/>
                <NavbarLink  to="/about" label="A propos"/>
                <NavbarLink  to="/contact" label="Contact"/>
            </div>
        </div>
    </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
import {useToggle} from "@/composables/userToggle";
import {ref} from 'vue'

export default {

    components:{
        NavbarLink
    },
    props: {},
    setup(){
        let {isVisible, toggle} = useToggle();
        let showWhiteBackrgound = ref(false)

        document.addEventListener("scroll", function(){
            let bodyTopPosition = document.body.getBoundingClientRect().top

            if(bodyTopPosition < -150){
                showWhiteBackrgound.value = true;
            }else{
                showWhiteBackrgound.value = false;
            }
        });

        return{
            isVisible,
            toggle,
            showWhiteBackrgound,
        }
    }
}
</script>