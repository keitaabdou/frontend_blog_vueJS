<template>
<InnerPageHero image-url="/images/image-3.jpg" title="Nous-contacter"/>
    
    <div class="container mx-auto py-8 sm:py-12 px-10 ">
        <div class="grid sm:grid-cols-3 sm:gap-4">
          <div><span class="text-gray-500">Adresse</span> Cocody Riviera 2</div>
          <div><span class="text-gray-500">Phone</span> 07 099 092 90 / 01 536 665 85</div>
          <div><span class="text-gray-500">Email</span> keitaabdoukarim@gmail.com</div>
          </div>

          <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7944.364679366805!2d-3.979971799999977!3d5.389158800000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sci!4v1626433130648!5m2!1sfr!2sci" 
              class="w-full"
              height="450" 
              style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <form action="" class="p-8 bg-gray-300 shadow rounded space-y-4">
              <div>
                <input type="text" placeholder="Entrer votre Nom" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" required>
                <!-- <span class="text-red-600 text-sm"> The error message</span> -->
              </div>
              <div>
                <input type="email" placeholder="Entrer votre Emal" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" required>
                <!-- <span class="text-red-600 text-sm"> The error message</span> -->
              </div>
               <div>
                <input type="phone" placeholder="Entrer votre Numero" class="px-4 py-2 w-full border focus:border-primary focus:outline-none rounded bg-gray-200" required>
                <!-- <span class="text-red-600 text-sm"> The error message</span> -->
              </div>
              <div>
                <textarea placeholder="Entrer le Message" class="px-4 py-2 w-full focus:border-primary focus:outline-none rounded bg-gray-200" rows="5" required></textarea>
                <!-- <span class="text-red-600 text-sm"> The error message</span> -->
              </div>
              <!-- <div class="px-4 py-2 bg-red-600 text-white rounded">
                Lorem ipsum dolor sit amet, consectetur
              </div> -->
              <!-- <div class="px-4 py-2 bg-green-600 text-white rounded">
                Lorem ipsum dolor sit amet, consectetur
              </div> -->
              <button class="px-4 py-2 bg-primary sm:px-6 text-white rounded focus:outline-none">Valider</button>
            </form>
          </div>
    </div>
   

</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";

export default {

  components: {
    InnerPageHero
  },

  props: {},
  
  setup() {
   
  },
};
</script>