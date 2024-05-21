import { ProductCard } from "./components/ProductCard.js";

const { createApp } = Vue;

createApp({
  components: {
    "product-card": ProductCard,
  },
  data() {
    return {
      itemList: [],
      numberLike: 0,
      showShopMenu: false,
      cart: [], // добавлено
    };
  },
  methods: {
    handlelike(id) {
      console.log("handlelike", id);

      const item = this.itemList.find((item) => item.id === id);
      if (item) {
        item.like = !item.like;
      }

      this.numberLike = this.itemList.filter((item) => item.like).length;
      console.log("Number of likes: ", this.numberLike);
    },
    showMenu() {
      this.showShopMenu = !this.showShopMenu;
    },
    addToCart(id) {
      const item = this.itemList.find((item) => item.id === id);
      if (item) {
        this.cart.push(item);
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
  mounted() {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("On mounted : ", data);
        this.itemList = data;
      });
    console.log("mounted");
  },
}).mount("#app");
