<script>

export default {
  name: "MeepleItem",
  props: {
    item: {
      type: Meeple,
    }
  },
}
Meeple()
{
  name: String
  age: Number
  role: String
}

</script>

<template>

  <p> {{ Meeple.name }} </p>

</template>

<style lang="scss" scoped>

</style>