<template>
  <div class="d-flex fles-row justify-content-between p-2">
    <span>{{item.title}}</span>
    <span><strong>{{item.price}}€</strong></span>
    <button @click="removeItemFromCart" class="close">&times;</button>
  </div>
</template>

<script>
import {eventBus} from '../../main';
export default {
  props: ['item'],
  methods: {
    removeItemFromCart(){
      eventBus.removeItemFromCart({...this.item});
    }
  }
}
</script>

<style>
</style>