<template>
    <div>
        <p>
        <slot></slot>
        </p>
    </div>
</template>

<style scoped>
div {
background-color: rgb(21, 21, 22);
padding-top: 20px;
padding-bottom: 20px;
}

p {
    display: flex;
    justify-content: center;
    margin: auto;
    color: white;
}
</style>