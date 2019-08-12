<template>
  <button class="btn">{{title}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.btn {
  background-color: #f65261;
  padding: 18px 75px;
  color: white;
  width: 100%;
  border: none;
  transition: 0.3s ease;
  font-size: 16px;
}

.btn:focus {
  outline: none;
}
</style>
