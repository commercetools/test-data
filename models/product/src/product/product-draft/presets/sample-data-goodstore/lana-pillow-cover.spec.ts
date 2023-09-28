import type { TProductDraft } from '../../../types';
import lanaPillowCover from './lana-pillow-cover';
import productDraft from './lana-pillow-cover.spec.json';

describe(`with lanaPillowCover preset`, () => {
  it(`should return a lanaPillowCover preset`, () => {
    const lanaPillowCoverPreset = lanaPillowCover().build<TProductDraft>();
    expect(lanaPillowCoverPreset).toMatchObject(productDraft.rest);
  });
});
