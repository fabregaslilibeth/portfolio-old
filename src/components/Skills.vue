<template>
  <div class="py-4" id="skills">
    <div class="w-full md:w-10/12 mx-auto">
      <h3 class="font-extrabold text-3xl text-center py-12 font-display uppercase tracking-widest">Skills.</h3>
      <div class="flex flex-wrap">
        <div class="w-1/2 sm:w-4/12 md:w-2/12" v-for="(skill, index) in skills" :key="index">
          <div class="skill-container relative rounded-md m-4 text-left text-white bg-transparent border border-gray-500 h-40">
            <div class="skill-cont group">
              <small class="p-2 font-display text-black group-hover:opacity-0 duration-300">{{ skill.name }}</small>
              <div class="skill-wrapper filter grayscale hover:filter-none" :style="`background: linear-gradient(transparent 50%, transparent`">
                <p class="text-center"><img :src="skill.image" alt="" class="w-3/4"></p>
              </div>
               <small class="p-2 opacity-0 absolute bottom-0 z-50 text-center left-0 font-display text-black group-hover:opacity-100 duration-300">{{ skill.name }}</small>
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
      excludeSkills: ['livewire', 'alpine']
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
.skill-cont {
  position: relative !important;
  width: 100%;
  height: 100%;
  top: 0;
  background: transparent;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border-radius: 10px;
}

.skill-wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: rotate(0deg);
  max-width: 70%;
  max-height: 70%;
  transition: 500ms;
}

.skill-container:hover .skill-wrapper {
  /* transform: rotate(20deg); */
  transition: 500ms;
  max-width: 120%;
  max-height: 100%;
  right: -16px;
  bottom: -4px;
  border-radius: 10px;
}

</style>