<template>
  <div class="w-full flex">
    <div class="py-12 w-full">
      <h3 class="font-extrabold text-3xl text-center py-12 font-serif uppercase tracking-widest">Skills</h3>

      <div class="w-10/12 mx-auto flex flex-wrap">
        <div class="w-2/12" v-for="(skill, index) in skills" :key="index">
          <div class="relative m-4 text-left">
            <small class="p-2">{{ skill.name }}</small>
            <div class="h-40 w-40 filter grayscale hover:filter-none duration-300" :style="`background: url('${skill.image}') center center no-repeat, linear-gradient(transparent, transparent); background-size: contain;
            `">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import skills from "../skills";

export default {
  name: "Skills",
  data() {
    return {
      skills: skills,
    }
  },

  mounted() {
    this.skills = skills
  },

  computed: {
    getImgUrl(pet) {
      let images = require.context('../assets/', false, /\.png$/)
      return images('./' + pet + ".png")
    }
  }
}
</script>

<style scoped>
</style>