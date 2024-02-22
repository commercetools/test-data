import type { TProductDraft } from '../../../types';
import taperedRollerBearing from './tapered-roller-bearing';

describe(`with taperedRollerBearing preset`, () => {
  it(`should return a taperedRollerBearing preset`, () => {
    const taperedRollerBearingPreset =
      taperedRollerBearing().build<TProductDraft>();
    expect(taperedRollerBearingPreset).toMatchInlineSnapshot();
  });

  it(`should return a taperedRollerBearing preset when built for graphql`, () => {
    const taperedRollerBearingPresetGraphql =
      taperedRollerBearing().buildGraphql<TProductDraft>();
    expect(taperedRollerBearingPresetGraphql).toMatchInlineSnapshot();
  });
});
