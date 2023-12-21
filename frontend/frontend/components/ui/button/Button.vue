<script lang="ts" setup>
// defineProps({
//     label: {
//         type: String,
//         default: 'Заказать',
//     },

//     color: {
//         type: String,
//         default: 'superBlue',
//     },

//     outlined: {
//         type: Boolean,
//         required: false,
//     },

//     size: {
//         type: String,
//         default: 'medium',
//     },
// });

defineProps<{
    label?: string;
    color?: string;
    outlined?: boolean;
    size?: string;
    closeModal?: () => void;
}>();
</script>

<template>
    <button
        @click="closeModal"
        type="submit"
        :class="[
            'btn',
            `btn_${color}`,
            { btn_outlined: outlined },
            { btn_large: size === 'large' },
            { btn_medium: size === 'medium' },
            { btn_small: size === 'small' },
        ]"
    >
        {{ label }}
    </button>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global.scss';

.btn {
    color: #fff;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;

    &_superBlue {
        background-color: $superblue;
        border: 1px solid $superblue;
        @include buttonActive($white, $superblue, $white, $superblue);
    }

    &_blue {
        background-color: $blue;
        border: 1px solid $blue;
        @include buttonActive($white, $blue, $white, $blue);
    }

    &_blueDark {
        background-color: $blueDark;
        border: 1px solid $blueDark;
        @include buttonActive($white, $blueDark, $white, $blueDark);
    }

    &_blueLight {
        background-color: $blueLight;
        border: 1px solid $blueLight;
        @include buttonActive($white, $blueLight, $white, $blueLight);
    }

    &_greyDark {
        background-color: $greyDark;
        border: 1px solid $greyDark;
        @include buttonActive($white, $greyDark, $white, $greyDark);
    }

    &_outlined {
        background: transparent;
        color: $blue;
        @include buttonActive($blue, $colorHover, $white, $blueDark);
    }

    &_large {
        height: 52px;
        padding: 13px 52px;
    }

    &_medium {
        height: 40px;
        padding: 8px 40px;
    }

    &_small {
        height: 29px;
        padding: 6px 24px;
        font-size: 14px;
    }
}
</style>
