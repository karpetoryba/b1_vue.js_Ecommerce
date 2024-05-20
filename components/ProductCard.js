export const ProductCard = {
  props: {
    id: Number,
    price: Number,
    src: String,
    like: Boolean,
  },
  template: `
  <div class="card" :key="id">
    <img :src="src" />
    <span class="price">{{price}} $</span>
    <div class="">
      <button class="btn btn-primary">
        {{like}}
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <button v-on:click="$emit('handlelike', id)" class="btn btn-secondary" >
        <i class="fa-regular fa-heart"></i>
      </button>
    </div>
  </div>`,
};
