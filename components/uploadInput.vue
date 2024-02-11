<template>
  <!-- upload files -->
  <div class="pt-14 rounded w-9/12 mx-auto pb-24">
    <div
      x-data="dataFileDnD()"
      class="relative flex flex-col p-4 text-text-color border border-border-color rounded"
    >
      <div
        x-ref="dnd"
        class="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
      >
        <input
        @change="useStorage.handleImageUpload"
          ref="myfile"
          type="file"
          multiple
          class="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
        />

        <div
          class="flex flex-col items-center justify-center py-10 text-center"
        >
          <!-- <font-awesome-icon
            :icon="['far', 'file']"
            class="text-text-color text-4xl shadow-lg"
          /> -->
          <p class="m-0 text-light-blue">
            Drag your files here or click in this area.
          </p>
        </div>
      </div>
    </div>
    <div  @click="useStorage.uploadImage" class="flex gap-4 bg-light-blue w-44 mt-6 p-1.5 text-center justify-center items-center m-auto rounded-md cursor-pointer">
       <img src="~/public/upload.svg" alt="">
      <p
        class="text-gray"
      >
        Upload
      </p>
    </div>

    <!-- progress bar -->
    <div class="pt-4">
      <p class="text-text-color font-semibold">
        Upload progress:
       <span v-if="useStorage.uploadProgress" class="text-light-blue"
          >{{ useStorage.uploadProgress }}%</span>
        
      </p>

       <div class="relative mb-5 h-2 rounded-full bg-text-color mt-4">
        <div
          v-if="useStorage.uploadProgress"
          class="h-2 rounded-full bg-light-blue"
          :style="{ width: useStorage.uploadProgress + '%' }"
        ></div>
        <span
          class="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-900"
          >{{ useStorage.uploadProgress }}%</span
        >
      </div>
    </div>

    <!-- images info -->
    <section>
      <div>
       
      </div>
    </section>
  </div>
  <!-- end of uploading -->
</template>

<script setup>
const useStorage = useStorageStore();
</script>

<style lang="scss" scoped></style>
