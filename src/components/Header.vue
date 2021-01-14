<template>
  <header>
    <h1 class="h1">SW Universe</h1>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes fadeDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

header {
  background-color: rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(10px);
  transform: translateY(-100%);
  opacity: 0;
  animation: fadeDown 1s forwards;
  animation-delay: 0.5s;
}

h1 {
  text-align: center;
  padding: 15px;
  color: white;
  letter-spacing: 4px;
  font-size: clamp(25px, 4vw, 60px);
}
</style>
