<template>
  <div class="w-25 p-3 product-container">
      <div class="d-flex flex-row justify-content-center">
          <img style="height:150px;" :src="product.img">
      </div>
      <div>
          <h3>{{product.title}}</h3>
      </div>
      <hr>
      <div>
          <p>{{product.description}}</p>
      </div>
      <div>
          <span>{{product.price}}</span>
          <button class="btn btn-primary btn-sm float-right">Commander</button>
      </div>
      
  </div>
</template>

<script>
export default {
  data(){
    return {
        product: {
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.a3cTF2kZNwANt9pgP_19WgHaF3%26pid%3DApi&f=1',
            title: 'MacBook',
            description: 'Incroyablement fin et léger, le MacBook Air monte encore en gamme.',
            price: '1500€'
        }    
    }
  }
}
</script>

<style>
.product-container{
    height: 400px;
}
p{
    font-size: 12px
}
</style>