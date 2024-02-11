<template>
  <div>
    <slot/>
    <footer id="footer" class="w-full max-w-[85rem] lg:pt-44 px-4 sm:px-6 lg:px-8 mx-auto">
      <!-- Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center"
      >
        <div>
          <a
            class="flex-none text-xl font-semibold text-light-blue dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 lg:text-4xl"
            href="#"
            aria-label="Brand"
            >P.R.E</a
          >
        </div>
        <!-- End Col -->

        <ul class="text-center">
          <li
            class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-text-color dark:before:text-gray-600"
          >
            <a
              class="inline-flex gap-x-2 text-sm text-text-color hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              About
            </a>
          </li>
          <li
            class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-text-color dark:before:text-gray-600"
          >
            <a
              class="inline-flex gap-x-2 text-sm text-text-color hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Services
            </a>
          </li>
          <li
            class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-text-color dark:before:text-gray-600"
          >
            <a
              class="inline-flex gap-x-2 text-sm text-text-color hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              Blog
            </a>
          </li>
        </ul>
        <!-- End Col -->

        <!-- Social Brands -->
        <div class="md:text-end space-x-2">
          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-light-blue hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <!-- <font-awesome-icon :icon="['fab', 'google']" class="text-light-blue"/> -->
          </a>
          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-light-blue hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
         <!-- <font-awesome-icon :icon="['fab', 'x-twitter']" class="text-light-blue"/> -->
          </a>
          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-light-blue hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
         <!-- <font-awesome-icon :icon="['fab', 'github']" class="text-light-blue"/> -->
          </a>
          <a
            class="w-8 h-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-light-blue hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
           <!-- <font-awesome-icon :icon="['fab', 'linkedin']" class="text-light-blue"/> -->
          </a>
        </div>
        <!-- End Social Brands -->
      </div>
      <!-- End Grid -->
    </footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
