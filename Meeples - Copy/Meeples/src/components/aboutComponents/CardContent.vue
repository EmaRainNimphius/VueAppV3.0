<script setup>
import BorderedCard from "@/components/BorderedCard.vue";
import {ref} from "vue";

let cardContent = ref([
  {
    title: 'Our Purpose',
    content: 'We are on the hunt to provide individuals with DID a way of tracking their alters along with daily activity. ' +
        'This not only allows individuals to feel more confident in their DID journey, but allows ' +
        'self reflection and the tracking of possible hosts and alter activity. With the forever developing' +
        'and altering inner world, we hope to provide a form of guidance while on your development journey.' +
        'Practice alter recognition and bring attention to keeping track of their activity.',
  },
  {
    title: 'About Us',
    content: 'About Us filler content. This is example text. About Us filler content. This is example text.' +
        'About Us filler content. This is example text. About Us filler content. This is example text.' +
        'About Us filler content. This is example text. About Us filler content. This is example text.' +
        'About Us filler content. This is example text. About Us filler content. This is example text.',
  },
  {
    title: 'This is Hooman',
    content: 'Hooman is a unique individual. However, their uniqueness makes them that much more special! ' +
        'Hooman, has different parts of themselves called *MEEPLES*!\n' +
        'These Meeples help Hooman do and manage daily tasks. So we need to make ' +
        'keeping track of meeples easy peasy!\n',
  },
  {
    title: 'What Are Meeples?',
    content: '*Meeples* are Hooman\'s friends! They are all made with the purpose of helping Hooman. ' +
        'This is done through helping in school, making new friends, dealing with big feelings, ' +
        'or even having a lazy day. Meeples have a...\n' +
        'More filler lol... More filler lol... More filler lol...\n' +
        'Name, Age, Role (what they were made to do), Location they were found, ' +
        'different strengths and weaknesses.',
  },
])
</script>

<template>
  <BorderedCard
      v-for="(item, index) in cardContent"
      :title="item.title"
      :content="item.content"
      :position="index"
  />

</template>

<style lang="scss" scoped>

</style>