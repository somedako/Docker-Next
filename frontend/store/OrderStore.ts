import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

const url = "http://localhost:5555/server";

interface orderData {
  title: string;
  orderId: string | number;
  price: string | number;
  quantity: string | number;
  id: string | number;
}

export const useOrderStore = defineStore("orderStore", () => {
  const orders = ref<any>([]);

  const getOrders = async () => {
    try {
      const { data } = await axios.get<orderData[]>(url);
      orders.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    orders,
    getOrders,
  };
});
