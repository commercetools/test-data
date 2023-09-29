import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import opalKingBed01 from './opal-king-bed-01';

describe(`with opalKingBed01 preset`, () => {
  it(`should return a opalKingBed01 preset`, () => {
    const opalKingBed01Preset = opalKingBed01().build<TProductVariantDraft>();
    expect(opalKingBed01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a opalKingBed01 preset when built for graphql`, () => {
    const opalKingBed01PresetGraphql =
      opalKingBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(opalKingBed01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
