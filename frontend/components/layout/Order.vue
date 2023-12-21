import { isTemplateNode } from '@vue/compiler-core';
<script lang="ts" setup>
defineProps<{
    item: {
        id: string | null;
        price: string | null;
        title: string | null;
        quantity: string | null;
        orderId: number | null;
    };
}>();
</script>

<template>
    <div class="order">
        <div class="order_items">
            <span>{{ item.id }}</span>
            <span>{{ item.orderId }}</span>
            <span>{{ item.title }}</span>
            <span>{{ item.price }}</span>
            <span>{{ item.quantity }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global.scss';

.order {
    max-width: 800px;
    width: 100%;
}

.order_items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
</style>
