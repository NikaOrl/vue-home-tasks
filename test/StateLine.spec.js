import Vue from 'vue';
import StateLine from '../src/components/StateLine';

describe('StateLine.test.js', () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(StateLine); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        value: ""
      }
    }).$mount(); // Instances and mounts the component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });

  it('should have options in data', () => {
    expect(vm.value).toBe("");
  });

  it('should change sortOption', () => {
    vm.onSortOptionChange('test');
    expect(vm.sortOption).toBe('test');
  });
});
