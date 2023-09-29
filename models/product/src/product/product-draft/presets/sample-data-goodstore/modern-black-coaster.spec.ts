import type { TProductDraft } from '../../../types';
import modernBlackCoaster from './modern-black-coaster';

describe(`with modernBlackCoaster preset`, () => {
  it(`should return a modernBlackCoaster preset`, () => {
    const modernBlackCoasterPreset =
      modernBlackCoaster().build<TProductDraft>();
    expect(modernBlackCoasterPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernBlackCoaster preset when built for graphql`, () => {
    const modernBlackCoasterPresetGraphql =
      modernBlackCoaster().buildGraphql<TProductDraft>();
    expect(modernBlackCoasterPresetGraphql).toMatchInlineSnapshot(``);
  });
});
