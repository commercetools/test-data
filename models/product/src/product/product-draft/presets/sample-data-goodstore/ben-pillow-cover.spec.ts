import type { TProductDraft } from '../../../types';
import benPillowCover from './ben-pillow-cover';
import productDraft from './ben-pillow-cover.spec.json';

describe(`with benPillowCover preset`, () => {
  it(`should return a benPillowCover preset`, () => {
    const benPillowCoverPreset = benPillowCover().build<TProductDraft>();
    expect(benPillowCoverPreset).toMatchObject(productDraft);
  });
});
