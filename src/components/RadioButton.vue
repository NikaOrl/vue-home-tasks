<template>
  <div class="radio-buttons">
    <div class="radio-buttons-title">{{title}}</div>
    <div v-for="btn in options" :key="btn.id">
      <input class="radio-button" type="radio" :checked="btn.isChecked" :name="radioButtonId" />
      <div class="box">
        <span>{{btn.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
let radioButtonId = 0;

export default {
  name: "RadioButton",
  props: {
    options: {
      type: Array
    },
    title: {
      type: String,
      default: ""
    }
  },
  data: () => {
    return {
      radioButtonId: radioButtonId++
    };
  }
};
</script>

<style>
.radio-buttons {
  display: flex;
}

.radio-button {
  display: none;
}

.radio-buttons-title {
  margin: auto 1em auto 0;
}

.radio-button:checked + .box {
  background-color: #f65261;
}

.box {
  background-color: #333;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  position: relative;
  padding: 10px 20px;
}

.box span {
  color: white;
}
</style>
