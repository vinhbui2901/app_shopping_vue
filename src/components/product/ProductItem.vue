<template>
  <div v-if="proItem" class="card text-left mt-4">
    <img class="card-img-top" :src="proItem.imgUrl" alt="">
    <div class="card-body">
      <h4 class="card-title">{{proItem.title}}</h4>
      <p class="card-text text-danger">{{proItem.pirce}} VND</p>
      <div class="row">
        <button class="col btn btn-danger mx-2">Mua</button>
        <button class="col btn btn-info mx-2">Chi tiết</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        proItem:{
            type: Object,
        }
    }

}
</script>

<style>

</style>