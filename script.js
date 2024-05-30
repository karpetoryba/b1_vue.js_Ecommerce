import { ProductCard } from "./components/ProductCard.js";

const { createApp } = Vue;

createApp({
  components: {
    "product-card": ProductCard,
  },
  data() {
    return {
      isCircleVisible: false,
      itemList: [],
      numberLike: 0,
      showShopMenu: false,
      cart: [],
      total: 0,
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
    toggleCircleVisibility() {
      this.isCircleVisible = !this.isCircleVisible;
    },
    addToCart(id) {
      const item = this.itemList.find((item) => item.id === id);
      if (item) {
        const cartItem = this.cart.find((cartItem) => cartItem.id === id);
        if (cartItem) {
          cartItem.number += 1;
        } else {
          this.cart.push({ ...item, number: 1 });
        }
      }
      this.updatetotalprice();
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
      this.updatetotalprice();
    },
    updatetotalprice() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.price * item.number;
      });
      this.total = total;
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
