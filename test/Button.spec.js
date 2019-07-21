import Vue from 'vue';
import Button from '../src/components/Button';

describe('Button.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = Vue.extend(Button); // Create a copy of the original component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });
});
