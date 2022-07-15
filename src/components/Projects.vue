<template>
  <div>
    <h3 class="font-extrabold text-3xl text-center py-12 uppercase tracking-widest">
      Projects
    </h3>

    <div class="custom-sticky">
      <div class="flex justify-center space-x-6">
        <div class="uppercase cursor-pointer hover:text-primary duration-300" v-for="category in categories"
          @click.prevent="filter(category.name)">
          <p class="uppercase px-5 py-1 font-extrabold"
            :class="selectedCategory === category.name && 'border border-primary rounded-full '">
            {{ category.name }}
          </p>
        </div>
      </div>
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
        { name: 'all' },
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
    },

    filter(category) {
      this.selectedCategory = category

      if (category === 'all') {
        this.getAllProjects()
        return;
      }

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
