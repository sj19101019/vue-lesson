<template>
  <div>
    <h1>Products</h1>
    <h2>{{ id }}</h2>
    <select @change="changeRouter" v-model="product_id">
      <option value="18">Shoes</option>
      <option value="20">Pants</option>
      <option value="22">T-Shirts</option>
    </select>
    <ul>
      <ProductItem 
        v-for="(item, index) in items" 
        :item="item" :key="index"/>
    </ul>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

const products = {
  18: "Shoes",
  20: "Pants",
  22: "T-Shirts",
};

const productDetails = {
  18: ["Nike", "adidas", "PUMA"],
  20: ["UNIQLO", "ZARA"],
  22: ["GU", "GAP"],
};

export default {
  data() {
    return {
      product_id: 18,
      items: []
    };
  },
  components: {
    ProductItem
  },
  computed: {
    id() {
      const sn = this.$route.query.id | this.$route.params.id;
      return products[sn | this.product_id];
    },
    changeRouter() {
      this.$router.push({ path: '/products/' + this.product_id });
      this.items = productDetails[this.product_id].slice();
    },
  },
};
</script>