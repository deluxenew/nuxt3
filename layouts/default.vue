<script lang="ts" setup>

</script>

<template lang="pug">
  div.p-4
    div.flex.gap-4
      nuxt-link(to="/") Главная
      nuxt-link(to="/auth") Авторизация
      nuxt-link(to="/profile") Профиль
    slot
</template>
