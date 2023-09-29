import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernUpholsteredTwinBed02 from './modern-upholstered-twin-bed-02';

describe(`with modernUpholsteredTwinBed02 preset`, () => {
  it(`should return a modernUpholsteredTwinBed02 preset`, () => {
    const modernUpholsteredTwinBed02Preset =
      modernUpholsteredTwinBed02().build<TProductVariantDraft>();
    expect(modernUpholsteredTwinBed02Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernUpholsteredTwinBed02 preset when built for graphql`, () => {
    const modernUpholsteredTwinBed02PresetGraphql =
      modernUpholsteredTwinBed02().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernUpholsteredTwinBed02PresetGraphql).toMatchInlineSnapshot(``);
  });
});
