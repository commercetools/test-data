import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed03 from './modern-upholstered-twin-bed-03';

describe(`with modernUpholsteredTwinBed03 preset`, () => {
  it(`should return a modernUpholsteredTwinBed03 preset`, () => {
    const modernUpholsteredTwinBed03Preset =
      modernUpholsteredTwinBed03().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed03Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernUpholsteredTwinBed03 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed03PresetGraphql =
      modernUpholsteredTwinBed03().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed03PresetGraphql).toMatchInlineSnapshot(``);
  });
});
