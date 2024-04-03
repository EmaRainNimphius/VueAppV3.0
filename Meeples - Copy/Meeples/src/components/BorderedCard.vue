<script setup>

defineProps({
  title: String,
  content: String,
  position: Number,
})

</script>

<template>
  <div class="container">
    <div class="card mt-5">
      <!-- card header -->
      <div class="card-title ms-4">
        <h4 class="fw-bold pt-4" id="title">
          <slot name="title"> {{ title }} </slot>
        </h4>
      </div>
      <!-- card body -->
      <div class="card-body pt-0 pb-4">
        <p class="fs-5 ms-2">
          <slot name="body"> {{ content }} </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>