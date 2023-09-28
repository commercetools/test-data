import type { TProductDraft } from '../../../types';
import opalKingBed from './opal-king-bed';
import productDraft from './opal-king-bed.spec.json';

describe(`with opalKingBed preset`, () => {
  it(`should return a opalKingBed preset`, () => {
    const opalKingBedPreset = opalKingBed().build<TProductDraft>();
    expect(opalKingBedPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a opalKingBed preset when built for graphql`, () => {
    const opalKingBedPresetGraphql =
      opalKingBed().buildGraphql<TProductDraft>();
    expect(opalKingBedPresetGraphql).toMatchObject(productDraft.graphql);
  });
});
