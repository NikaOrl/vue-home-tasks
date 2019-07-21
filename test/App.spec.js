import Vue from 'vue';
import App from '../src/App';

describe('App.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = Vue.extend(App); // Create a copy of the original component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });
});
