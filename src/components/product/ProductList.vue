<template>
  <section class="product-list">
    <h2 class="text-center text-danger font-weight-bold">Các sản phẩm nổi bật</h2>
    <div class="row">
        <div v-for="(item, index) in listProduct" class="col-lg-3" :key="index">
            <product-item :proItem="item"/>
        </div>
    </div>
  </section>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
    data(){
        return{
            listProduct: [
                {   id: 1,
                    title: "SAMSUNG S22| S22 PLUS| S22 ULTRA",
                    imgUrl: "https://img.hungmobile.vn/hungmobile-vn/2022/02/w200/thumld.jpg",
                    pirce: 100000,
                    quantity:10,
                },
                {   
                    id: 2,
                    title: "Samsung S21 Plus 5G Mỹ Likenew (S888)",
                    imgUrl: "https://img.hungmobile.vn/hungmobile-vn/2022/02/w200/thuml.jpg",
                    pirce: 200000,
                    quantity:10,
                },
                {
                    id: 3,
                    title: "Nubia Z40s Pro sạc 80W 12/256GB (XẢ KHO)",
                    imgUrl: "https://img.hungmobile.vn/hungmobile-vn/2022/08/w200/samsung-s22-ultra-ba-n-da-c-bie-t.jpg",
                    pirce: 300000,
                    quantity:4,
                },
                {
                    id: 4,
                    title: "Redmi Note 11 5G 6/128GB Nguyên Seal Xịn",
                    imgUrl: "https://img.hungmobile.vn/hungmobile-vn/2022/10/w200/redmi-note12-pro.jpg",
                    pirce: 400000,
                    quantity:6,
                },
                {
                    id: 5,
                    title: "Rog Phone 7 (Snapdragon 8 Gen 2)",
                    imgUrl: "https://img.hungmobile.vn/hungmobile-vn/2022/07/w200/thuml-4.jpg",
                    pirce: 200000,
                    quantity:8,
                },
                {
                    id: 6,
                    title: "iPhone Xs 256GB Đổi Bảo Hành (Mới Chưa Active)",
                    imgUrl: "https://img.hungmobile.vn/hungmobile-vn/2020/08/w200/iphone-xs-thum-3.jpg",
                    pirce: 100000,
                    quantity:4,
                },
                {
                    id: 7,
                    title: "iPhone Xs 512GB Quốc Tế (Đẹp 99%)",
                    imgUrl: "https://img.hungmobile.vn/hungmobile-vn/2020/08/w200/iphone-xs-thum-2.jpg",
                    pirce: 500000,
                    quantity:10,
                },
                {
                    id: 8,
                    title: "iPhone 11 Pro 64GB Quốc Tế (Đẹp 99%)",
                    imgUrl: "https://img.hungmobile.vn/hungmobile-vn/2020/08/w200/note-10-plus-thum-2.jpg",
                    pirce: 300000,
                    quantity:4,
                }
            ]
        };
    },
    components:{
        ProductItem,
    }

}
</script>

<style>

</style>