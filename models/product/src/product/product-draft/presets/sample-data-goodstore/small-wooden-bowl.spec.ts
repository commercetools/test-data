import type { TProductDraft } from '../../../types';
import smallWoodenBowl from './small-wooden-bowl';
import productDraft from './small-wooden-bowl.spec.json';

describe(`with smallWoodenBowl preset`, () => {
  it(`should return a smallWoodenBowl preset`, () => {
    const smallWoodenBowlPreset = smallWoodenBowl().build<TProductDraft>();
    expect(smallWoodenBowlPreset).toMatchObject(productDraft.rest);
  });
});
