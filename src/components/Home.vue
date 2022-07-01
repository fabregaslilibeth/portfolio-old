<template>
  <div class="md:flex w-full items-center h-screen">
    <div class="pt-40 w-full md:w-1/2">
      <img src="../assets/home/beth-face.png" class="my-4 mx-auto w-1/2" alt="Lilibeth Fabregas photo">
    </div>

    <div class="px-8 w-full md:w-1/2 flex items-center justify-center h-100 text-center">
      <div>
        <h1 class="font-extrabold text-5xl tracking-wider">Lilibeth Fabregas</h1>
        <p class="font-extrabold pt-4 uppercase text-xl tracking-widest">CPA. Web Developer.</p>

        <button
          class="mt-12 w-full border-2 border-primary px-10 py-2 uppercase text-xs rounded-lg shadow-xl font-semibold hover:bg-primary hover:text-white duration-300">
          View CV
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>