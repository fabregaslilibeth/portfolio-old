<template>
  <div class="">

    <div class="w-full p-4" @click.prevent="more()">
      <img class="" :src=project.image :alt="`${project.name}-image`">
      <!-- <div class="w-full h-0" :style="`background: url('${project.image}') center top no-repeat; background-size: 100%`">
      </div> -->

      <div class="w-full text-center rounded-b-xl bg-gray-50 pt-3 py-8 relative">

        <div class="z-10 absolute left-10 bottom-20">
          <div class="text-gray-200 text-9xl font-display">{{ index + 1 }}
          </div>
        </div>

        <div class="relative z-20">
          <h5 class="font-sans text-gray-700 font-extrabold text-3xl">{{ project.name }}</h5>
          <p class="font-sans px-4 pt-2 font-semibold"><small>{{ project.description }}</small></p>
          <!-- <p class="p-4 md:h-32"><small>{{ project.description2 }}</small></p> -->

          <p class="pt-8 uppercase text-xs font-semibold">Tools:</p>
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
      icons: []
    }
  },

  mounted() {
    this.icons = []
    this.project.categories.forEach(category => {
      this.icons.push(skills.find(icon => icon.name === category))
    })
  },
  methods: {
    more() {
      this.$router.push({ path: `/projects/${this.project.slug}` })
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
</style>
