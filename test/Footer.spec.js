import Vue from 'vue';
import Footer from '../src/components/Footer';

describe('Footer.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = Vue.extend(Footer); // Create a copy of the original component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });
});
