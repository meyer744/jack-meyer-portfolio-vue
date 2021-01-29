<template>
    <button type="button" class="btn btn-outline-primary">
        <slot></slot>
    </button>
</template>

<style scoped>
button {
  display: flex;
  justify-content: center;
  margin: auto;
  margin-bottom: 20px;
}
</style>