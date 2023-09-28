import type { TProductDraft } from '../../../types';
import modernBlackCoaster from './modern-black-coaster';
import productDraft from './modern-black-coaster.spec.json';

describe(`with modernBlackCoaster preset`, () => {
  it(`should return a modernBlackCoaster preset`, () => {
    const modernBlackCoasterPreset =
      modernBlackCoaster().build<TProductDraft>();
    expect(modernBlackCoasterPreset).toMatchObject(productDraft.rest);
  });
});
