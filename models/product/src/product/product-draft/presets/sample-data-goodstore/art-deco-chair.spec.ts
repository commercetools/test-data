import type { TProductDraft } from '../../../types';
import artDecoChair from './art-deco-chair';
import productDraft from './art-deco-chair.spec.json';

describe(`with artDecoChair preset`, () => {
  it(`should return a artDecoChair preset`, () => {
    const artDecoChairPreset = artDecoChair().build<TProductDraft>();
    expect(artDecoChairPreset).toMatchObject(productDraft.rest);
  });
});
