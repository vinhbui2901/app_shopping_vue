<template>
  <table class="table table-striped-columns">
    <thead>
        <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng trong kho</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Xoá</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(cart, index) in cartListBuy" :key="index">
            <td scope="row">{{index + 1}}</td>
            <td>{{cart.title}}</td>
            <td>{{cart.pirce}}</td>
            <td>{{cart.quantity}}</td>
            <td>
                <button class="btn btn-success px-1 py-1" @click="handleUpOrDownCart(true, cart)">
                    <i class="fa fa-arrow-up "></i>
                </button>
                <span class="mx-1">{{cart.amount}}</span>
                <button class="btn btn-success px-1 py-1" @click="handleUpOrDownCart(false, cart)">
                     <i class="fa fa-arrow-down"></i>
                </button>
            </td>
            <td>{{cart.pirce * cart.amount}}</td>
            <td>
                <button class="btn btn-danger" @click="hanldeDelete(cart)">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
        <tr>
            <td scope="row">Tổng tiền</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{{totalPrice}}</td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    props:{
    cartListBuy:{
        type: Array,
    }
  },
  computed:{
    totalPrice(){
        return this.cartListBuy.reduce((sum, cart)=> (sum += cart.pirce * cart.amount), 0);
    }
  },
  methods:{
    hanldeDelete(cart){
        this.$emit('hanled-delete-cart', cart);
    },
    handleUpOrDownCart(status, cart){
        this.$emit('handle-up-or-down-cart', {status, cart});
    }
  }
}
</script>

<style>

</style>