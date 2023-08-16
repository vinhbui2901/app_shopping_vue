<template>
  <div v-if="proItem" class="card text-left mt-4">
    <img class="card-img-top" :src="proItem.imgUrl" alt="">
    <div class="card-body">
      <h4 class="card-title">{{proItem.title}}</h4>
      <p class="card-text text-danger">{{proItem.pirce}} VND</p>
      <div class="row">
        <button class="col btn btn-danger mx-2" @click="hanldeBuyItem(proItem)">Mua</button>
        <button class="col btn btn-info mx-2" @click="handleOpenModalProductDetail(proItem)">Chi tiết</button>
      </div>
    </div>
  </div>
  <teleport to='#app'>
    <app-modal :isOpen="isOpenModalProductDetail" :handleCloseModal="handleCloseModalProductDetail">
      <section>
        <cart-detail :productItemDetail="productItemDetail"></cart-detail>
      </section>
    </app-modal>
  </teleport>
</template>
<script>
import CartDetail from '../app_modal/CartDetail.vue';
export default {
    data(){
      return{
       isOpenModalProductDetail: false,
       productItemDetail:{},
      }
    },
    props:{
        proItem:{
            type: Object,
        }
    },
    methods:{
        hanldeBuyItem(item){
            this.$emit('hanlde-buy-product-item', item);
        },
        handleOpenModalProductDetail(item){
          this.isOpenModalProductDetail = true;
          this.productItemDetail = item;
        },
        handleCloseModalProductDetail(){
          this.isOpenModalProductDetail = false;
      }
    },
    components:{
      CartDetail,
    }
}
</script>

<style>

</style>