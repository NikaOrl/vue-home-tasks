import Vue from 'vue';
import SearchInput from '../src/components/SearchInput';

describe('SearchInput.test.js', () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(SearchInput); // Create a copy of the original component
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
});
