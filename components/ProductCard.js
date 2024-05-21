export const ProductCard = {
  props: {
    id: Number,
    price: Number,
    src: String,
    name: String,
    like: Boolean,
  },
  methods: {
    toggleLike() {
      this.$emit("handlelike", this.id);
    },
  },
  template: `
  <div class="card" :key="id">
    <img :src="src" />
    <span class="price">{{ price }} $</span>
    <div class="">
      <button class="btn btn-primary" @click="$emit('addtocart', id)">
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <button @click="toggleLike" :class="{'liked': like}" class="btn btn-secondary">
        <i :class="[like ? 'fa-solid' : 'fa-regular', 'fa-heart']"></i>
      </button>
    </div>
  </div>`,
};
