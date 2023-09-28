import type { TProductDraft } from '../../../types';
import modernUpholsteredTwinBed from './modern-upholstered-twin-bed';
import productDraft from './modern-upholstered-twin-bed.spec.json';

describe(`with modernUpholsteredTwinBed preset`, () => {
  it(`should return a modernUpholsteredTwinBed preset`, () => {
    const modernUpholsteredTwinBedPreset =
      modernUpholsteredTwinBed().build<TProductDraft>();
    expect(modernUpholsteredTwinBedPreset).toMatchObject(productDraft.rest);
  });

  it(`should return a modernUpholsteredTwinBed preset when built for graphql`, () => {
    const modernUpholsteredTwinBedPresetGraphql =
      modernUpholsteredTwinBed().buildGraphql<TProductDraft>();
    expect(modernUpholsteredTwinBedPresetGraphql).toMatchObject(
      productDraft.graphql
    );
  });
});
