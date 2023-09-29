import type { TProductDraft } from '../../../types';
import modernLandscapePainting from './modern-landscape-painting';

describe(`with modernLandscapePainting preset`, () => {
  it(`should return a modernLandscapePainting preset`, () => {
    const modernLandscapePaintingPreset =
      modernLandscapePainting().build<TProductDraft>();
    expect(modernLandscapePaintingPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernLandscapePainting preset when built for graphql`, () => {
    const modernLandscapePaintingPresetGraphql =
      modernLandscapePainting().buildGraphql<TProductDraft>();
    expect(modernLandscapePaintingPresetGraphql).toMatchInlineSnapshot(``);
  });
});
