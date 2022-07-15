<template>
  <div class="p-4">
    <div class="w-full overflow-hidden h-136">
      <img class="transform duration-500" :class="isVisible && '-mt-52'" :src=project.image
        :alt="`${project.name}-image`">

      <div class="w-full text-center rounded-b-xl bg-gray-50 pt-6 py-8 relative">

        <!-- Start of buttons when expanded -->
        <div class="m-3 flex justify-between" v-if="isVisible">
          <p class="">
            <small class="font-sans px-4 pt-2 font-semibold cursor-pointer" @click="isVisible = false">
              <i class="fas fa-arrow-left"></i>
              Back
            </small>
          </p>

          <p class="space-x-3">
            <a :href="project.demo" target="_blank">
              <span class="cursor-pointer text-youtube" title="Watch demo">
                <i class="fab fa-youtube"></i>
              </span>
            </a>

            <a :href="project.code" target="_blank">
              <span class="cursor-pointer" :class="`text-${project.codeIcon}`" title="View code">
                <i :class="`fab fa-${project.codeIcon}`"></i>
              </span>
            </a>

            <small v-if="project.live === '#'"
              class="border border-primary px-3 py-1 rounded-full text-xxs uppercase font-semibold">
              Not deployed
            </small>

            <small v-else
              class="border border-primary px-3 py-1 rounded-full cursor-pointer text-xxs uppercase font-semibold">
              <a :href="project.live" target="_blank">Visit site</a>
            </small>
          </p>
        </div>
        <!-- End of buttons when expanded -->


        <!-- Start of Project count -->
        <div class="z-10 absolute left-10 " :class="isVisible ? 'top-20' : 'top-20'">
          <div class="transform duration-500 font-display"
            :class="isVisible ? 'text-5xl text-gray-400' : 'text-gray-200 text-9xl'">
            {{ index + 1 }}
          </div>
        </div>
        <!-- End of Project count -->

       
        <div class="relative z-20">
          <h5 class="font-sans text-gray-700 font-extrabold text-3xl" :class="isVisible && 'mt-6'">
            {{ project.name }}
          </h5>

        <!-- Start of read more when collapsed -->
          <p class="font-sans px-4 pt-2 font-semibold">
            <small>{{ project.description }}
              <span v-if="!isVisible" class="cursor-pointer italic text-gray-4 00 ml-3 animate-pulse" @click="isVisible = true">
                Read more...
              </span>
            </small>
          </p>
          

          <div
            class="flex m-4 justify-center absolute -top-20 right-0 bg-black px-4 py-1 rounded-full bg-black opacity-60"
            v-if="!isVisible">
            <p class="space-x-3">
              <a :href="project.demo" target="_blank">
                <span class="cursor-pointer text-gray-100" title="Watch demo">
                  <i class="fab fa-youtube"></i>
                </span>
              </a>

              <a :href="project.code" target="_blank">
                <span class="cursor-pointer text-gray-100" title="View code">
                  <i class="fas fa-code"></i>
                </span>
              </a>

              <a v-if="project.live !== '#'" :href="project.live" target="_blank">
                <span class="cursor-pointer text-gray-100" title="Visit site">
                  <i class="fas fa-globe"></i>
                </span>
              </a>

            </p>
          </div>

          <div class="m-3 transform duration-300" :class="isVisible ? 'visible h-40 delay-200' : 'invisible h-0 overflow-hidden'">
            <small>{{ project.description2 }}</small>
          </div>

          <p class="uppercase text-xs font-semibold pt-3" :class="isVisible ? 'mt-6' : 'mt-8' ">Tools:</p>

          <div class="m-2 m-md-4 flex space-x-3 justify-center">
            <small v-for="icon in icons" :key="icon">
              <img :src="icon.image" alt="" class="icon">
            </small>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import skills from "../skills";

export default {
  name: 'Project',

  props: {
    project: {
      type: Object
    },

    index: {
      type: Number
    }
  },

  data() {
    return {
      icons: [],
      isVisible: false,
    }
  },

  mounted() {
    this.icons = []
    this.project.categories.forEach(category => {
      this.icons.push(skills.find(icon => icon.name === category))
    })
  },
  methods: {
    goto(link) {
      window.open(link, '_blank');
    },
  }
}
</script>

<style scoped>
.icon {
  width: 30px;
  margin: 10px;
}

.project-card {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.project-number {}
</style>
