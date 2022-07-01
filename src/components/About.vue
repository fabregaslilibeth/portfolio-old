<template>
  <div class="w-full py-20">
    <div class="w-full md:w-1/2 text-center mx-auto relative">

      <div class="z-20">
        <h3 class="font-extrabold text-3xl py-12 font-display uppercase tracking-widest">About Me</h3>

        <p>I am <span class="font-semibold">Full Stack Web Developer</span> . Being a career shifter (shifted from
          Finance and Accounting), I focus on
          building web applications related to Accounting and Finance.</p>

        <p class="my-4">Accounting has taught me to be mindful of everything, down to the simplest details, always
          keeping in mind that a simple mistake can cause the company a lot. To always study to keep up with the new regulations. To be responsible.</p>

        <p>A match made in heaven, Accounting and Web Development, that is. I have both and I am ready for the next level.</p>

        <p class="mt-12 mb-4 font-semibold">Experience</p>
        <p>Full Stack Web Developer</p>
        <p class="italic text-primary pb-8">October 2019 - present, 3 years</p>

        <p>Accountant and Finance Officer</p>
        <p class="italic text-primary pb-8">July 2011 - June 2018, 7 years</p>
      </div>


      <div class="absolute bottom-0 -left-40 z-10">
        <GirlWithBriefCase />
      </div>
    </div>
  </div>
</template>

<script>
import GirlWithBriefCase from "../components/Svgs/GirlWithBriefCase.vue";

export default {
  name: 'About',

  data() {
    return {
      showMore: false,
    }
  },

  components: { GirlWithBriefCase },

  methods: {
    readMore() {
      this.showMore = true
    },
    hide() {
      this.showMore = false
    }
  }
}
</script>
