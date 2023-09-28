import type { TProductDraft } from '../../../types';
import squareBambooCoaster from './square-bamboo-coaster';
import productDraft from './square-bamboo-coaster.spec.json';

describe(`with squareBambooCoaster preset`, () => {
  it(`should return a squareBambooCoaster preset`, () => {
    const squareBambooCoasterPreset =
      squareBambooCoaster().build<TProductDraft>();
    expect(squareBambooCoasterPreset).toMatchObject(productDraft.rest);
  });
});
