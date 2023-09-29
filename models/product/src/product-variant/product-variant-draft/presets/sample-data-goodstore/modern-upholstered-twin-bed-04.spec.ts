import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed04 from './modern-upholstered-twin-bed-04';

describe(`with modernUpholsteredTwinBed04 preset`, () => {
  it(`should return a modernUpholsteredTwinBed04 preset`, () => {
    const modernUpholsteredTwinBed04Preset =
      modernUpholsteredTwinBed04().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed04Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernUpholsteredTwinBed04 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed04PresetGraphql =
      modernUpholsteredTwinBed04().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed04PresetGraphql).toMatchInlineSnapshot(``);
  });
});
