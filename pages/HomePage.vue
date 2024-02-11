<template>
    <main class="h-screen">
    <!-- sidebar -->
    <sidebar />
    <!-- end of sidebar -->

    <div id="home" class="p-4 sm:ml-64 md:pt-18">
      <div class="p-4 h-96">
        <div id="homepage" class="text-center justify-center m-auto">
          <h2 class="text-text-color font-semibold text-2xl md:text-4xl">Welcome!!🤗</h2>
          <p class="text-text-color text-md pt-4">
            Get started by uploading your files
          </p>
        </div>
        <div id="input-page" class="bg-light-gray rounded-md mt-14">
          <div class="flex gap-6 justify-between">
            <button
              class="text-text-color uppercase font-medium p-4 tracking-widest w-full"
            >
              upload
            </button>
            <button
              class="bg-button-color text-text-color uppercase font-medium p-4 tracking-widest w-full"
            >
              Links
            </button>
          </div>
          <!-- upload -->
          <upload-input />
          <!-- upload end -->
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  titleTemplate: "upload your files",
});
</script>


