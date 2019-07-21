<template>
  <div class="state-line">
    <div class="state-line-left-container">
      <div class="state-line-left">7 movies found</div>
    </div>
    <div class="state-line-right">
      <RadioButton
        :title="'SORT BY'"
        :options="options"
        id="2"
        v-on:option-change="onSortOptionChange"
      />
    </div>
  </div>
</template>

<script>
import RadioButton from "./RadioButton.vue";

export default {
  name: "StateLine",
  components: { RadioButton },
  data: () => {
    return {
      options: [
        {
          title: "RELEASE DATE",
          isChecked: true,
          name: "searchBy"
        },
        {
          title: "RATING",
          isChecked: false,
          name: "searchBy"
        }
      ],
      sortOption: "RELEASE DATE"
    };
  },
  methods: {
    onSortOptionChange(sortOption) {
      this.sortOption = sortOption;
      alert(sortOption);
    }
  }
};
</script>

<style scoped>
.state-line {
  display: flex;
  justify-content: space-between;
  padding: 10px 10em;
  color: white;
  background-color: #555;
}
.state-line-left-container {
  display: flex;
}

.state-line-left {
  margin: auto;
}

.state-line-right {
  display: flex;
  justify-content: space-between;
}

.state-line-right .active {
  color: #f65261;
}
</style>
