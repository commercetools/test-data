import type { TProductDraft } from '../../../types';
import modernCeramicPlate from './modern-ceramic-plate';

describe(`with modernCeramicPlate preset`, () => {
  it(`should return a modernCeramicPlate preset`, () => {
    const modernCeramicPlatePreset =
      modernCeramicPlate().build<TProductDraft>();
    expect(modernCeramicPlatePreset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernCeramicPlate preset when built for graphql`, () => {
    const modernCeramicPlatePresetGraphql =
      modernCeramicPlate().buildGraphql<TProductDraft>();
    expect(modernCeramicPlatePresetGraphql).toMatchInlineSnapshot(``);
  });
});
