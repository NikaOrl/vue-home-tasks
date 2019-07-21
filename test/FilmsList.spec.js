import Vue from 'vue';
import FilmsList from '../src/components/FilmsList';

describe('FilmsList.test.js', () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(FilmsList); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        films: ["films"]
      }
    }).$mount(); // Instances and mounts the component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });

  it('should have films in data', () => {
    expect(vm.films).toEqual(["films"]);
  });
});
