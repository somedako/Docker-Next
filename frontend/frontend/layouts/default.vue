<script lang="ts" setup></script>

<template>
    <section class="container">
        <div>
            <slot />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    min-height: 100vh;
    max-width: 1230px;
    padding: 0 15px;
}
</style>
