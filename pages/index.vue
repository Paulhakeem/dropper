<template>
  <!-- Hero -->
  <div class="relative overflow-hidden">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <!-- Announcement Banner -->
      <div class="flex justify-center">
        <a
          class="inline-flex items-center gap-x-2 border border-light-blue text-sm text-text-color p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          href="#"
        >
          Read about new version - V2
          <span
            class="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400"
          >
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </span>
        </a>
      </div>
      <!-- End Announcement Banner -->

      <!-- Title -->
      <div class="mt-5 max-w-2xl text-center mx-auto">
        <h1
          class="block font-bold text-light-blue text-3xl md:text-5xl lg:text-6xl"
        >
          Let's Store Your Files
        </h1>
      </div>
      <!-- End Title -->

      <div class="mt-5 max-w-3xl text-center mx-auto">
        <p class="text-lg text-text-color">
          By uploading files or URL you agree to our Terms of Service. This site
          is protected by hCaptcha and its Privacy Policy and Terms of Service
          apply
        </p>
      </div>

      <!-- Buttons -->
      <div class="mt-8 gap-3 flex justify-center">
        <nuxt-link
          to="/HomePage"
          class="inline-flex justify-center items-center gap-x-3 text-center bg-light-blue text-gray text-sm font-medium rounded-md py-3 px-4 hover:bg-gray hover:text-light-blue hover:border hover:border-light-blue"
        >
          Get started
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </nuxt-link>

        <nuxt-link to="/signIn">
          <button
            type="button"
            class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-light-blue text-light-blue shadow-sm hover:border-none hover:bg-light-blue hover:text-gray"
          >
            Register
            <span
              class="flex justify-center items-center bg-gray-200 rounded-md w-7 h-7 dark:bg-gray-700 dark:text-gray-400"
            >
              <font-awesome-icon :icon="['far', 'clipboard']" />
            </span>
          </button>
        </nuxt-link>
      </div>
      <!-- End Buttons -->
    </div>
  </div>
  <!-- End Hero -->
</template>

<script setup></script>
