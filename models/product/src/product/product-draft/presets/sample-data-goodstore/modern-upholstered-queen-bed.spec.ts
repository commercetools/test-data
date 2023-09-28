import type { TProductDraft } from '../../../types';
import modernUpholsteredQueenBed from './modern-upholstered-queen-bed';
import productDraft from './modern-upholstered-queen-bed.spec.json';

describe(`with modernUpholsteredQueenBed preset`, () => {
  it(`should return a modernUpholsteredQueenBed preset`, () => {
    const modernUpholsteredQueenBedPreset =
      modernUpholsteredQueenBed().build<TProductDraft>();
    expect(modernUpholsteredQueenBedPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a modernUpholsteredQueenBed preset when built for graphql`, () => {
    const modernUpholsteredQueenBedPresetGraphql =
      modernUpholsteredQueenBed().buildGraphql<TProductDraft>();
    expect(modernUpholsteredQueenBedPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
