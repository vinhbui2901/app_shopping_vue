<template>
  <header>
    <the-header :cartListBuy="cartListBuy" @hanled-delete-cart="hanledDelete" @handle-up-or-down-cart="handleUpOrDownCart"/>
  </header>
  <main class="container">
    <product-list @hanlde-buy-product-item="hanldeBuy"/>
  </main>
</template>

<script>
import TheHeader from './components/the_header/TheHeader.vue';
import ProductList from './components/product/ProductList.vue'
export default {
  name: 'App',
  data(){
    return {
      cartListBuy: [],
    }
  },
  components: {
    TheHeader,
    ProductList,
  },
  methods:{
    hanldeBuy(productItem){
      const index = this.cartListBuy.findIndex((cart)=> cart.id === productItem.id);

      if(index !== -1){
        this.cartListBuy[index].amount += 1;
      }else{
        const newProductItem = {...productItem,amount: 1};
        this.cartListBuy.push(newProductItem);
      }
    },
    hanledDelete(cart){
     this.cartListBuy = this.cartListBuy.filter((carItem) => carItem.id !== cart.id)
    },
    handleUpOrDownCart(params){
        const {status, cart} = params;
        const index = this.cartListBuy.findIndex((carItem)=> carItem.id === cart.id);
        if(index !== -1){
          if(status){
            if(this.cartListBuy[index].amount < this.cartListBuy[index].quantity){
              this.cartListBuy[index].amount += 1;
            }else{
              alert("vựa quá số lượng trong kho")
            }
        }else{
          if(this.cartListBuy[index].amount > 1){
            this.cartListBuy[index].amount -= 1;
        }else{
          this.cartListBuy = this.cartListBuy.filter((carItem) => carItem.id !== cart.id)
          }
       }
    }
  }
  },
}
</script>

<style>
</style>
