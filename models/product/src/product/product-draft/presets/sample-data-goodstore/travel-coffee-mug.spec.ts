import type { TProductDraft } from '../../../types';
import travelCoffeeMug from './travel-coffee-mug';
import productDraft from './travel-coffee-mug.spec.json';

describe(`with travelCoffeeMug preset`, () => {
  it(`should return a travelCoffeeMug preset`, () => {
    const travelCoffeeMugPreset = travelCoffeeMug().build<TProductDraft>();
    expect(travelCoffeeMugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a travelCoffeeMug preset when built for graphql`, () => {
    const travelCoffeeMugPresetGraphql =
      travelCoffeeMug().buildGraphql<TProductDraft>();
    expect(travelCoffeeMugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
