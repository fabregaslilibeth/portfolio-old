<template>
  <div>
    <h3 class="font-extrabold text-3xl text-center py-12 font-display uppercase tracking-widest">Projects.</h3>
    <div class="custom-sticky">
      <div class="flex justify-center space-x-6">
        <div class="uppercase cursor-pointer hover:text-primary duration-300" @click.prevent="getAllProjects">ALL</div>

        <div class="uppercase cursor-pointer hover:text-primary duration-300" v-for="category in categories"
          @click.prevent="filter(category.name)">
          <p class="capitalize" :class="selectedCategory === category.name && 'text-primary'">{{ category.name }}</p>
        </div>
      </div>

      <!-- <p class="text-center pt-4"><span class="bg-gray-800 text-white px-4 py-2 rounded-full text-xs shadow-md"><span
            class="capitalize font-extrabold">{{ selectedCategory }}</span>:
          {{ filteredProjects.length }} projects</span>
      </p> -->
    </div>

    <div class="md:w-10/12 mx-auto mt-12 flex justify-center flex-wrap duration-300">
      <div v-for="(project, index) in filteredProjects" class="w-full md:w-1/3">
        <Project :project="project" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import projects from "../projects";

export default {
  name: 'Projects',

  components: { Project },

  data() {
    return {
      categories: [
        { name: 'laravel' },
        { name: 'vue' },
        { name: 'react' },
      ],
      projects: projects,

      filteredProjects: [],

      selectedCategory: '',
    }
  },
  mounted() {
    this.getAllProjects()
  },
  methods: {

    getAllProjects() {
      this.filteredProjects = this.projects

      this.selectedCategory = 'All'
    },

    filter(category) {
      this.selectedCategory = category

      this.filteredProjects = []
      this.projects.forEach(project => {
        if (project.categories.includes(category.toLowerCase())) {
          this.filteredProjects.push(project)
        }
      })
    }
  }
}
</script>

<style>
.custom-sticky {
  position: sticky;
  top: 30px;
}
</style>
