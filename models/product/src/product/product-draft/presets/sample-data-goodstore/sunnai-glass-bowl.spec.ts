import type { TProductDraft } from '../../../types';
import sunnaiGlassBowl from './sunnai-glass-bowl';

describe(`with sunnaiGlassBowl preset`, () => {
  it(`should return a sunnaiGlassBowl preset`, () => {
    const sunnaiGlassBowlPreset = sunnaiGlassBowl().build<TProductDraft>();
    expect(sunnaiGlassBowlPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a sunnaiGlassBowl preset when built for graphql`, () => {
    const sunnaiGlassBowlPresetGraphql =
      sunnaiGlassBowl().buildGraphql<TProductDraft>();
    expect(sunnaiGlassBowlPresetGraphql).toMatchInlineSnapshot(``);
  });
});
