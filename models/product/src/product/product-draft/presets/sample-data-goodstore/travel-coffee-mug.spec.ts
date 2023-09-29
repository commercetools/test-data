import type { TProductDraft } from '../../../types';
import travelCoffeeMug from './travel-coffee-mug';

describe(`with travelCoffeeMug preset`, () => {
  it(`should return a travelCoffeeMug preset`, () => {
    const travelCoffeeMugPreset = travelCoffeeMug().build<TProductDraft>();
    expect(travelCoffeeMugPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a travelCoffeeMug preset when built for graphql`, () => {
    const travelCoffeeMugPresetGraphql =
      travelCoffeeMug().buildGraphql<TProductDraft>();
    expect(travelCoffeeMugPresetGraphql).toMatchInlineSnapshot(``);
  });
});
