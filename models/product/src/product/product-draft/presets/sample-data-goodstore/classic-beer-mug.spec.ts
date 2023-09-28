import type { TProductDraft } from '../../../types';
import classicBeerMug from './classic-beer-mug';
import productDraft from './classic-beer-mug.spec.json';

describe(`with classicBeerMug preset`, () => {
  it(`should return a classicBeerMug preset`, () => {
    const classicBeerMugPreset = classicBeerMug().build<TProductDraft>();
    expect(classicBeerMugPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a classicBeerMug preset when built for graphql`, () => {
    const classicBeerMugPresetGraphql =
      classicBeerMug().buildGraphql<TProductDraft>();
    expect(classicBeerMugPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
