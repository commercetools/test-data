import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed01 from './modern-upholstered-twin-bed-01';

describe(`with modernUpholsteredTwinBed01 preset`, () => {
  it(`should return a modernUpholsteredTwinBed01 preset`, () => {
    const modernUpholsteredTwinBed01Preset =
      modernUpholsteredTwinBed01().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernUpholsteredTwinBed01 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed01PresetGraphql =
      modernUpholsteredTwinBed01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
