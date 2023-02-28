<script>
import { RouterView } from 'vue-router'
import Container from './components/layout/Container.vue'

export default {
  components: { Container }
}
</script>

<template>
  <Container>
    <RouterView />
  </Container>
</template>
