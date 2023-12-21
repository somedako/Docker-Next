<script lang="ts" setup>
// defineProps({
//     modelValue: {
//         type: String,
//     },

//     placeholder: {
//         type: String,
//         default: 'Placeholder',
//     },

//     type: {
//         type: String,
//         default: 'text',
//     },

//     patterns: {
//         type: String,
//         required: false,
//     },
// });

defineProps<{
    modelValue?: string | number;
    placeholder?: string;
    type?: string;
    patterns?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', message: string | null): void;
}>();

const onInput = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value);
};
</script>

<template>
    <input
        @input="onInput"
        :type="type"
        :value="modelValue"
        class="input"
        :placeholder="placeholder"
        :pattern="patterns"
        required
    />
</template>

<style lang="scss" scoped>
@use '@/assets/scss/global.scss';

.input {
    display: block;
    width: 100%;
    max-width: 320px;
    padding: 12px 16px;
    font-size: 14px;
    border: 1px solid #a6a6a6;
    outline: none;
    border-radius: 4px;

    &:placeholder {
        font-size: 14px;
        color: $greyDark;
    }

    &:focus {
        border: 1px solid $blue;
        color: $black;
    }

    &:invalid:not(:placeholder-shown) {
        border-color: red;
    }

    &:valid:not(:placeholder-shown) {
        border-color: green;
    }
}
</style>
