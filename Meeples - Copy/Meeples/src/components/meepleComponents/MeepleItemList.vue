<script>
import MeepleItem from "@/components/meepleComponents/MeepleItem.vue";

let meeples = new MeepleItem();

onCreateNew()
{
  this.task = new Task({}, tasks);
}


</script>

<template>
<MeepleItem
  v-for="xs in x"
  :name ="x"
  :age="x"
  :role="x"
/>

</template>

<style lang="scss" scoped>

</style>