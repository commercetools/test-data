import type { TProductDraft } from '../../../types';
import silkyPillowCover from './silky-pillow-cover';
import productDraft from './silky-pillow-cover.spec.json';

describe(`with silkyPillowCover preset`, () => {
  it(`should return a silkyPillowCover preset`, () => {
    const silkyPillowCoverPreset = silkyPillowCover().build<TProductDraft>();
    expect(silkyPillowCoverPreset).toMatchObject(productDraft);
  });
});
