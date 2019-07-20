<template>
  <input type="button" class="btn" @click="onClick" :value="title" />
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    onClick() {
      alert("click");
    }
  }
};
</script>

<style>
.btn {
  background-color: #f65261;
  padding: 18px 75px;
  color: white;
}
</style>
