import type { TProductDraft } from '../../../types';
import orionDoubleBed from './orion-double-bed';

describe(`with orionDoubleBed preset`, () => {
  it(`should return a orionDoubleBed preset`, () => {
    const orionDoubleBedPreset = orionDoubleBed().build<TProductDraft>();
    expect(orionDoubleBedPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a orionDoubleBed preset when built for graphql`, () => {
    const orionDoubleBedPresetGraphql =
      orionDoubleBed().buildGraphql<TProductDraft>();
    expect(orionDoubleBedPresetGraphql).toMatchInlineSnapshot(``);
  });
});
