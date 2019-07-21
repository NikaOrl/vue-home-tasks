import Vue from 'vue';
import RadioButton from '../src/components/RadioButton';

describe('RadioButton.test.js', () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(RadioButton); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        radioButtonId: 1
      }
    }).$mount(); // Instances and mounts the component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });

  it('should have radioButtonId in data', () => {
    expect(vm.radioButtonId).toBe(1);
  });
});
