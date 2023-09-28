import type { TProductDraft } from '../../../types';
import doubleWalledEspressoGlass from './double-walled-espresso-glass';
import productDraft from './double-walled-espresso-glass.spec.json';

describe(`with doubleWalledEspressoGlass preset`, () => {
  it(`should return a doubleWalledEspressoGlass preset`, () => {
    const doubleWalledEspressoGlassPreset =
      doubleWalledEspressoGlass().build<TProductDraft>();
    expect(doubleWalledEspressoGlassPreset).toMatchObject(productDraft.rest);
  });
});
