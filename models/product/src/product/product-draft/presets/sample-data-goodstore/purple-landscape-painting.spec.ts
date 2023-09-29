import type { TProductDraft } from '../../../types';
import purpleLandscapePainting from './purple-landscape-painting';

describe(`with purpleLandscapePainting preset`, () => {
  it(`should return a purpleLandscapePainting preset`, () => {
    const purpleLandscapePaintingPreset =
      purpleLandscapePainting().build<TProductDraft>();
    expect(purpleLandscapePaintingPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a purpleLandscapePainting preset when built for graphql`, () => {
    const purpleLandscapePaintingPresetGraphql =
      purpleLandscapePainting().buildGraphql<TProductDraft>();
    expect(purpleLandscapePaintingPresetGraphql).toMatchInlineSnapshot(``);
  });
});
