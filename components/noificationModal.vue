<script setup>
defineEmits(["close-modal"])
defineProps({
        modalActive: {
        type: Boolean,
        default: false,
    }
})
</script>

<template>
    <transition name="modal-outer">
        <div v-show="modalActive"
        class="absolute w-full z-50 bg-gray bg-opacity-30 h-screen flex px-8">

        <transition name="modal-inner">
        <div v-if="modalActive"
        class="p-4 bg-text-color self-start mt-32 max-w-md ">
        <slot/>
        <button 
        @click="$emit('close-modal')"
        class="text-white mt-8 bg-light-blue py-2 px-6 rounded-md">
        Closed  
        </button>
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

.modal-inner-enter-from{
    opacity: 0;
    transform: scale(0.8);
}

.modal-inner-leave-to {
    transform: scale(0.8);
}
</style>