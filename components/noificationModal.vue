<script setup>
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <transition name="modal-outer">
    <div
      v-show="modalActive"
      class="absolute w-full z-50 bg-gray bg-opacity-30 h-screen flex px-8"
    >
      <transition name="modal-inner">
        <div
          v-if="modalActive"
          class="p-4 bg-text-color self-start mt-32 max-w-[100%]"
        >

         <div class="flex justify-end">
             <svg
             @click="$emit('close-modal')"
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            class="py-2 cursor-pointer"
          >
            <g fill="none">
              <path
                d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
              />
              <path
                fill="#888888"
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M9.879 8.464a1 1 0 0 0-1.498 1.32l.084.095l2.12 2.12l-2.12 2.122a1 1 0 0 0 1.32 1.498l.094-.083L12 13.414l2.121 2.122a1 1 0 0 0 1.498-1.32l-.083-.095L13.414 12l2.122-2.121a1 1 0 0 0-1.32-1.498l-.095.083L12 10.586z"
              />
            </g>
          </svg>
         </div>
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
