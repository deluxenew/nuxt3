<script setup lang="ts">
import { useStore } from "~/store"
const model = useState<string>("model")
const store = useStore()
const save = () => store.setUser(model)
</script>

<template lang="pug">
  div.pt-2.flex.gap-2
    input(class="ring focus:outline-none focus:ring focus:border-blue-300" v-model="model")
    button(@click="save") сохранить
</template>

