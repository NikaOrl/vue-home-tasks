import Vue from 'vue';
import SearchForm from '../src/components/SearchForm';

describe('SearchForm.test.js', () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(SearchForm); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        options: ["options"]
      }
    }).$mount(); // Instances and mounts the component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });

  it('should have options in data', () => {
    expect(vm.options).toEqual(["options"]);
  });

  it('should change searchOption', () => {
    vm.onSearchOptionChange('test');
    expect(vm.searchOption).toBe('test');
  });

  it('should change searchValue', () => {
    vm.onSearchValueChange('value');
    expect(vm.searchValue).toBe('value');
  });
});
