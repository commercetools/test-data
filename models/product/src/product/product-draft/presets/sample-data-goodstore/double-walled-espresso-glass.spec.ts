import type { TProductDraft } from '../../../types';
import doubleWalledEspressoGlass from './double-walled-espresso-glass';
import productDraft from './double-walled-espresso-glass.spec.json';

describe(`with doubleWalledEspressoGlass preset`, () => {
  it(`should return a doubleWalledEspressoGlass preset`, () => {
    const doubleWalledEspressoGlassPreset =
      doubleWalledEspressoGlass().build<TProductDraft>();
    expect(doubleWalledEspressoGlassPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a doubleWalledEspressoGlass preset when built for graphql`, () => {
    const doubleWalledEspressoGlassPresetGraphql =
      doubleWalledEspressoGlass().buildGraphql<TProductDraft>();
    expect(doubleWalledEspressoGlassPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
