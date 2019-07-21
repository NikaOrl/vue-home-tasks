import Vue from 'vue';
import Header from '../src/components/Header';

describe('Header.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = Vue.extend(Header); // Create a copy of the original component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });
});
