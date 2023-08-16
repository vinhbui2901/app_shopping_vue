<template>
  <div v-if="productItemDetail" class="container">
    <div class="row">
        <div class="col-sm-4">
            <img :src="productItemDetail.imgUrl" alt="">
        </div>
        <div class="col-sm-8">
            <div class="alert alert-success">
                <b>Name : </b><span>{{productItemDetail.title}}</span>
            </div>
            <div class="alert alert-success">
                <b>Mo ta : </b><span>{{productItemDetail.title}}</span>
            </div>
            <div class="alert alert-success">
                <b>Gia ban : </b><span>{{productItemDetail.pirce}}</span>
            </div>
            <div class="alert alert-success">
                <b>So luong trong kho : </b><span>{{productItemDetail.quantity}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        productItemDetail:{
            type: Object,
        }
    }
}
</script>

<style>

</style>