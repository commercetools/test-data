import type { TProductDraft } from '../../../types';
import sipperCoffeeMug from './sipper-coffee-mug';
import productDraft from './sipper-coffee-mug.spec.json';

describe(`with sipperCoffeeMug preset`, () => {
  it(`should return a sipperCoffeeMug preset`, () => {
    const sipperCoffeeMugPreset = sipperCoffeeMug().build<TProductDraft>();
    expect(sipperCoffeeMugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a sipperCoffeeMug preset when built for graphql`, () => {
    const sipperCoffeeMugPresetGraphql =
      sipperCoffeeMug().buildGraphql<TProductDraft>();
    expect(sipperCoffeeMugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
