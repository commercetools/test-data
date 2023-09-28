import type { TProductDraft } from '../../../types';
import sipperCoffeeMug from './sipper-coffee-mug';
import productDraft from './sipper-coffee-mug.spec.json';

describe(`with sipperCoffeeMug preset`, () => {
  it(`should return a sipperCoffeeMug preset`, () => {
    const sipperCoffeeMugPreset = sipperCoffeeMug().build<TProductDraft>();
    expect(sipperCoffeeMugPreset).toMatchObject(productDraft);
  });
});
