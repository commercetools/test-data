import type { TProductDraft } from '../../../types';
import idunPillowCover from './idun-pillow-cover';
import productDraft from './idun-pillow-cover.spec.json';

describe(`with idunPillowCover preset`, () => {
  it(`should return a idunPillowCover preset`, () => {
    const idunPillowCoverPreset = idunPillowCover().build<TProductDraft>();
    expect(idunPillowCoverPreset).toMatchObject(productDraft.rest);
  });
});
