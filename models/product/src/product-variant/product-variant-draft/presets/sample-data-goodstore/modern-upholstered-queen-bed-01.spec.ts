import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredQueenBed01 from './modern-upholstered-queen-bed-01';

describe(`with modernUpholsteredQueenBed01 preset`, () => {
  it(`should return a modernUpholsteredQueenBed01 preset`, () => {
    const modernUpholsteredQueenBed01Preset =
      modernUpholsteredQueenBed01().build<TProductVariantDraft>();
    expect(modernUpholsteredQueenBed01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernUpholsteredQueenBed01 preset when built for graphql`, () => {
    const modernUpholsteredQueenBed01PresetGraphql =
      modernUpholsteredQueenBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredQueenBed01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
