<template>
  <span class="{wrapperClassName}">
    <label>
      <input class="radio-button" type="radio" :checked="isChecked" :name="name" />
      <div class="box">
        <span>{{title}}</span>
      </div>
    </label>
  </span>
</template>

<script>
export default {
  name: "SearchRadioButton",
  props: {
    title: {
      type: String,
      default: ""
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.radio-button {
  display: none;
}

.radio-button:checked + .box {
  background-color: #f65261;
}

.radio-button:checked + .box span {
  color: white;
  transform: translateY(70px);
}

.radio-button:checked + .box span :before {
  transform: translateY(0px);
  opacity: 1;
}

.box {
  background-color: #333;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  position: relative;
  font-weight: 900;
  padding: 5px 1em;
}

.box:active {
  transform: translateY(10px);
}
.box span {
  color: #f65261;
}
</style>
