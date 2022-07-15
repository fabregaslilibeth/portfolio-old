<template>
  <div class="font-sans text-gray-700 relative">
    <div class="fixed w-full bg-gray-200 p-6 shadow-xl flex items-center justify-between z-50">
      <div class="font-cursive text-4xl font-semibold">
        <a href="/"><span class="text-gray-700">Beth</span></a>
      </div>

      <div class="flex space-x-4 font-extrabold text-lg">
        <p><a href="#skills" class="uppercase cursor-pointer hover:text-primary duration-300">SKILLS</a></p>
        <p><a href="#projects" class="uppercase cursor-pointer hover:text-primary duration-300">PROJECTS</a></p>
        <p><a href="#about" class="uppercase cursor-pointer hover:text-primary duration-300">About</a></p>
        <p><a href="#contact" class="uppercase cursor-pointer hover:text-primary duration-300">Contact</a></p>
        <p><a href="#svg" class="uppercase cursor-pointer hover:text-primary duration-300">SVG</a></p>
      </div>

    </div>


    <div class="fixed top-1/4 right-5 bg-gray-800 px-1 py-4 rounded-full space-y-3">
      <p>
        <a title="linkedin" href="https://ph.linkedin.com/in/lilibeth-fabregas-bb0a0a120" target="_blank" class="px-2">
          <i class="fab fa-linkedin-in text-gray-50 hover:text-linkedin duration-300"></i>
        </a>
      </p>

      <p>
        <a title="youtube" href="https://www.youtube.com/channel/UCAsYo-w1L1zd0L8M6Zdk0Zg?view_as=subscriber"
          target="_blank" class="px-2">
          <i class="fab fa-youtube text-gray-50 hover:text-youtube duration-300"></i>
        </a>
      </p>

      <p>
        <a title="github" href="https://github.com/fabregaslilibeth" target="_blank" class="px-2">
          <i class="fab fa-github text-gray-50 hover:text-github duration"></i>
        </a>
      </p>

      <p>
        <a title="gitlab" href="https://gitlab.com/lilibethfabregas" target="_blank" class="px-2">
          <i class="fab fa-gitlab text-gray-50 hover:text-gitlab duration"></i>
        </a>
      </p>

    </div>


    <div id="home" class="">
      <Home />
    </div>

    <div id="skills" class="bg-gray-300">
      <Skills />
    </div>

    <div id="projects" class="">
      <Projects />
    </div>

    <div id="about" class="bg-gray-300">
      <About />
    </div>

    <div id="contact" class="">
      <Contact />
    </div>

    <div class="bg-gray-800 text-white text-center py-4 text-xs">
      <p>Lilibeth Fabregas || CPA. Web Developer.</p>
      <p>Tools used for this portfolio: vuejs, tailwindcss</p>
      <p>Disclaimer: All photos used in projects are not mine.</p>
    </div>
    <router-view />
  </div>
</template>



<script>
import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Svg from "./components/Svgs.vue";

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: { Home, Skills, Projects, About, Contact },
}
</script>



<style>
#app {
  background: white url('data:image/png;base64,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');
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;

}
</style>
