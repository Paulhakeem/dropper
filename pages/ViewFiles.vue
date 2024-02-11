<template>
  <section>
    <sidebar />
    <div class="text-text-color text-center pt-10 m-auto select-none">
      <h1 class="text-xl font-semibold text-light-blue">Uploaded Files</h1>
      <p class="text-text-color font-light text-md pt-4">
        All the uploaded files are stored here according to there category
      </p>

      <div
        class="flex flex-wrap m-auto pt-12 gap-10 justify-center text-center"
      >
        <div
          class="text-center border border-1 border-border-color rounded-md size-72 cursor-pointer justify-center items-center"
        >
          <h4 class="text-light-blue font-semibold pt-3">JPEG</h4>
          <div class="flex justify-center items-center">
            <img
              src="../assets/images/jpg.png"
              alt="jpg icon"
              class="object-cover object-center w-52 pt-3"
            />
          </div>
        </div>
        <div
          class="border border-1 border-border-color rounded-md size-72 cursor-pointer"
        >
          <h4 class="text-light-blue font-semibold pt-3">PNG</h4>
         <div class="flex justify-center items-center">
           <img
            src="../assets/images/png.png"
            alt="jpg icon"
            class="object-cover object-center w-52 pt-3"
          />
         </div>
        </div>
        <div
          class="border border-1 border-border-color rounded-md size-72 cursor-pointer"
        >
          <h4 class="text-light-blue font-semibold pt-3">PDF</h4>
         <div class="flex justify-center items-center">
           <img
            src="../assets/images/pdf.png"
            alt="jpg icon"
            class="object-cover object-center w-52 pt-3"
          />
         </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
