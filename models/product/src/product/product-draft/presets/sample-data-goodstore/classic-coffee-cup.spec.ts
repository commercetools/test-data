import type { TProductDraft } from '../../../types';
import classicCoffeeCup from './classic-coffee-cup';
import productDraft from './classic-coffee-cup.spec.json';

describe(`with classicCoffeeCup preset`, () => {
  it(`should return a classicCoffeeCup preset`, () => {
    const classicCoffeeCupPreset = classicCoffeeCup().build<TProductDraft>();
    expect(classicCoffeeCupPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a classicCoffeeCup preset when built for graphql`, () => {
    const classicCoffeeCupPresetGraphql =
      classicCoffeeCup().buildGraphql<TProductDraft>();
    expect(classicCoffeeCupPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
