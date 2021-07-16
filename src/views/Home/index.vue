<template>
  <div>
    <Hero />
  <div class="py-8 sm:py-20 px-8">
    <Articles />
  </div>
</div>
</template>

<script>

import Hero from "./Hero.vue";
import Articles from "@/components/Articles";

export default {
  name: 'Home',

  components: {
    Hero,
    Articles,
  }
}
</script>
