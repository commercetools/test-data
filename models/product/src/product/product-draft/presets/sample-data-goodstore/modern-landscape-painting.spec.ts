import type { TProductDraft } from '../../../types';
import modernLandscapePainting from './modern-landscape-painting';
import productDraft from './modern-landscape-painting.spec.json';

describe(`with modernLandscapePainting preset`, () => {
  it(`should return a modernLandscapePainting preset`, () => {
    const modernLandscapePaintingPreset =
      modernLandscapePainting().build<TProductDraft>();
    expect(modernLandscapePaintingPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a modernLandscapePainting preset when built for graphql`, () => {
    const modernLandscapePaintingPresetGraphql =
      modernLandscapePainting().buildGraphql<TProductDraft>();
    expect(modernLandscapePaintingPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
