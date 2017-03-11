<template>
  <div class="container">
    <h1
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
