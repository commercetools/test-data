import type { TProductDraft } from '../../../types';
import comfortCoffeeMug from './comfort-coffee-mug';
import productDraft from './comfort-coffee-mug.spec.json';

describe(`with comfortCoffeeMug preset`, () => {
  it(`should return a comfortCoffeeMug preset`, () => {
    const comfortCoffeeMugPreset = comfortCoffeeMug().build<TProductDraft>();
    expect(comfortCoffeeMugPreset).toMatchObject(productDraft.rest);
  });
});
