<template>
  <div class="p-4 group h-136">

    <div class="w-full overflow-hidden">
      <img class="group-hover:-mt-52 transform duration-500" :src=project.image :alt="`${project.name}-image`">

      <div class="w-full text-center rounded-b-xl bg-gray-50 pt-3 py-8 relative">

        <div class="z-10 absolute left-10 top-20 group-hover:top-8">
          <div
            class="text-gray-200 text-9xl group-hover:text-3xl group-hover:text-primary transform duration-500 font-display">
            {{ index + 1 }}
          </div>
        </div>

        <div class="relative z-20">
          <h5 class="font-sans text-gray-700 font-extrabold text-3xl group-hover:mt-6">{{ project.name }}</h5>
          <p class="font-sans px-4 pt-2 font-semibold"><small>{{ project.description }}</small></p>
          <!-- <p class="p-4 md:h-32"><small>{{ project.description2 }}</small></p> -->

          <div
            class="h-0 overflow-hidden group-hover:inline-block m-3 group-hover:h-52 transform delay-100 ease-in group-hover:ease-in duration-100">
            <small>{{ project.description2 }}</small>

            <p class="m-3 text-right">
              <small v-if="project.live === '#'" class="border border-primary px-3 py-1 rounded-full text-xxs uppercase font-semibold">Not deployed</small>
              <small v-else
                class="border border-primary px-3 py-1 rounded-full cursor-pointer text-xxs uppercase font-semibold">
                <a :href="project.live" target="_blank">Visit site</a>
              </small>
            </p>
          </div>

          <p class="pt-8 group-hover:pt-3 uppercase text-xs font-semibold">Tools:</p>
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
