<template>
  <div class="py-12 relative">
    <h3 class="font-extrabold text-3xl text-center py-12 uppercase tracking-widest">Contact me</h3>

    <div class="w-full md:w-8/12 mx-auto">
      <div class="flex w-full flex-wrap mt-8 justify-center">
        <div class="w-1/2 text-center px-10">
          <p class="space-x-4 text-gray-500"><i class="fas fa-desktop fa-7x"></i></p>
          <p class="pt-3 font-bold"><span><a
                href="fabregaslilibeth.github.io/portfolio"
                target="_blank">fabregaslilibeth.github.io/portfolio</a></span></p>
        </div>

        <div class="w-1/2 text-center px-10">
          <p class="space-x-4 text-gray-500"><i
              class="far fa-envelope fa-7x"></i></p>
              <p class="pt-3 font-bold"><span><a href="mailto:fabregaslilibeth@gmail.com">fabregaslilibeth@gmail.com</a></span></p>
        </div>

        <div class="w-1/2 text-center px-10 pt-20">
          <p class="space-x-4 text-gray-500"><i class="fab fa-skype fa-7x"></i></p>
          <p class="pt-3 font-bold"><span>lilibeth.fabregas.cpa</span></p>
        </div>

        <div class="w-1/2 text-center px-10 pt-20">
          <p class="space-x-4 text-gray-500"><i class="fas fa-mobile-alt fa-7x"></i>
          </p>
          <p class="pt-3 font-bold"><span>+63 969 130 6506</span></p>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 right-0 z-10">
      <GirlWithPhone />
    </div>
  </div>
</template>

<script>
import GirlWithPhone from "../components/Svgs/GirlWithPhone.vue";

export default {
  name: 'Contact',

  components: { GirlWithPhone },
}
</script>