import type { TProductDraft } from '../../../types';
import modernUpholsteredQueenBed from './modern-upholstered-queen-bed';

describe(`with modernUpholsteredQueenBed preset`, () => {
  it(`should return a modernUpholsteredQueenBed preset`, () => {
    const modernUpholsteredQueenBedPreset =
      modernUpholsteredQueenBed().build<TProductDraft>();
    expect(modernUpholsteredQueenBedPreset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernUpholsteredQueenBed preset when built for graphql`, () => {
    const modernUpholsteredQueenBedPresetGraphql =
      modernUpholsteredQueenBed().buildGraphql<TProductDraft>();
    expect(modernUpholsteredQueenBedPresetGraphql).toMatchInlineSnapshot(``);
  });
});
