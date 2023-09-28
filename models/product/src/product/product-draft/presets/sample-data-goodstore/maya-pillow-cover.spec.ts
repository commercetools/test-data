import type { TProductDraft } from '../../../types';
import mayaPillowCover from './maya-pillow-cover';
import productDraft from './maya-pillow-cover.spec.json';

describe(`with mayaPillowCover preset`, () => {
  it(`should return a mayaPillowCover preset`, () => {
    const mayaPillowCoverPreset = mayaPillowCover().build<TProductDraft>();
    expect(mayaPillowCoverPreset).toMatchObject(productDraft);
  });
});
