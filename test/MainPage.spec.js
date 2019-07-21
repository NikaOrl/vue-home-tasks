import Vue from 'vue';
import MainPage from '../src/components/MainPage';

describe('MainPage.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = Vue.extend(MainPage); // Create a copy of the original component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });
});
