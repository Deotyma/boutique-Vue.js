<template>
  <div class="d-flex fles-row justify-content-between p-2 px-5 ">
    <span>{{item.title}}</span>
    <span><strong>{{item.price}}€</strong></span>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>
</style>