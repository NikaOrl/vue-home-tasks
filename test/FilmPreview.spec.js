import Vue from 'vue';
import FilmPreview from '../src/components/FilmPreview';

describe('FilmPreview.test.js', () => {
  let cmp;

  beforeEach(() => {
    cmp = Vue.extend(FilmPreview); // Create a copy of the original component
  });

  it('should be created', () => {
    expect(cmp).toBeTruthy()
  });
});
