<script lang="ts" setup>
import { ref } from "vue";
import { useOrderStore } from "@/store/OrderStore";
import { v4 as uuid } from "uuid";
import axios from "axios";

const orderStore = useOrderStore();

const title = ref<string>("");
const price = ref<string>("");
const quantity = ref<string>("");
const id = ref("");
const isSuccess = ref<boolean>(false);

const url = "http://localhost:5555/server";

const createOrder = async () => {
  isSuccess.value = true;
  id.value = uuid();
  const order = {
    title: title.value,
    orderId: id.value,
    price: price.value,
    quantity: quantity.value,
  };
  try {
    const res = await axios.post(url, {
      title: title.value,
      orderId: id.value,
      price: price.value,
      quantity: quantity.value,
    });
  } catch (error) {
    console.log(error);
  }
};

const closeModal = () => {
  title.value = "";
  price.value = "";
  quantity.value = "";
  isSuccess.value = false;

  orderStore.getOrders();
};
</script>

<template>
  <div class="model_success" v-show="isSuccess">
    <h2>Заказ № {{ id }} успешно оформлен)))</h2>
    <Button label="Ок" size="large" color="blue" :closeModal="closeModal" />
  </div>

  <form class="form" @submit.prevent="createOrder">
    <Input v-model="title" placeholder="Название" required />
    <Input v-model="price" placeholder="Цена" pattern="^[ 0-9]+$" required />
    <Input
      v-model="quantity"
      pattern="^[ 0-9]+$"
      placeholder="Количество"
      required
    />
    <Button label="Заказать" size="large" color="blue" />
  </form>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/global.scss";
.form {
  display: flex;
  position: relative;
  gap: 30px;
  max-width: 800px;
  width: 100%;
  margin: 40px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.model_success {
  position: absolute;
  top: 25%;
  height: auto;
  background: #b7b7b7;
  box-shadow: 0px 11px 8px 0px rgba(34, 60, 80, 0.2);
  text-align: center;
  max-width: 620px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #b7b7b7;
  padding: 15px;
  background: #fff;
  z-index: 2;

  & h2 {
    margin: 15px 0;
  }

  & button {
    width: 50%;
  }
}
</style>
