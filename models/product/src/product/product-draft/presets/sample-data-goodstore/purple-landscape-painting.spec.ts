import type { TProductDraft } from '../../../types';
import purpleLandscapePainting from './purple-landscape-painting';
import productDraft from './purple-landscape-painting.spec.json';

describe(`with purpleLandscapePainting preset`, () => {
  it(`should return a purpleLandscapePainting preset`, () => {
    const purpleLandscapePaintingPreset =
      purpleLandscapePainting().build<TProductDraft>();
    expect(purpleLandscapePaintingPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a purpleLandscapePainting preset when built for graphql`, () => {
    const purpleLandscapePaintingPresetGraphql =
      purpleLandscapePainting().buildGraphql<TProductDraft>();
    expect(purpleLandscapePaintingPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
