<script lang="ts" setup>

import { useOrderStore } from '@/store/OrderStore';

const orderStore = useOrderStore();

await useAsyncData("orders", () => orderStore.getOrders());
</script>

<template>
    <div class="wrapper">
        <div class="order_container" v-if="orderStore.orders">
            <Order
                v-for="item in orderStore.orders"
                :key="item.orderId"
                :item="item"
            />
        </div>

        <div v-show="orderStore.orders.length === 0">
            <h2>Вы еще ничего не заказывали(((</h2>
        </div>
        <Form />
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global.scss';

.wrapper {
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.order_container {
    width: 100%;
    display: flex;
    max-height: 300px;
    overflow-y: auto;
    flex-direction: column;
    padding: 0 40px;
    gap: 35px;
    max-width: 800px;
}
</style>
