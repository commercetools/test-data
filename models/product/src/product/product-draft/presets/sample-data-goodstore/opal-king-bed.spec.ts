import type { TProductDraft } from '../../../types';
import opalKingBed from './opal-king-bed';

describe(`with opalKingBed preset`, () => {
  it(`should return a opalKingBed preset`, () => {
    const opalKingBedPreset = opalKingBed().build<TProductDraft>();
    expect(opalKingBedPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a opalKingBed preset when built for graphql`, () => {
    const opalKingBedPresetGraphql =
      opalKingBed().buildGraphql<TProductDraft>();
    expect(opalKingBedPresetGraphql).toMatchInlineSnapshot(``);
  });
});
