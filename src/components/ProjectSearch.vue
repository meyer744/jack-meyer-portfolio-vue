<template>
    <input type="text" placeholder="search..."
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
      >
</template>

<script>
export default {
props: ['modelValue'],
emits: ['update:modelValue'],
}
</script>

<style scoped>
input {
width: 100%;
  border: 3px solid #4f5e6d;
  padding: 5px;
  height: 20px;
  border-radius: 6px;
  outline: none;
  width: 250px;
  height: 30px;
  display: flex;
  margin: auto;
}
</style>