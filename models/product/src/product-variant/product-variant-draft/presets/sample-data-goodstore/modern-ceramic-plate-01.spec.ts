import type {
  TProductVariantDraft,
  TProductVariantDraftGraphql,
} from '../../../types';
import modernCeramicPlate01 from './modern-ceramic-plate-01';

describe(`with modernCeramicPlate01 preset`, () => {
  it(`should return a modernCeramicPlate01 preset`, () => {
    const modernCeramicPlate01Preset =
      modernCeramicPlate01().build<TProductVariantDraft>();
    expect(modernCeramicPlate01Preset).toMatchInlineSnapshot(``);
  });

  it(`should return a modernCeramicPlate01 preset when built for graphql`, () => {
    const modernCeramicPlate01PresetGraphql =
      modernCeramicPlate01().buildGraphql<TProductVariantDraftGraphql>();
    expect(modernCeramicPlate01PresetGraphql).toMatchInlineSnapshot(``);
  });
});
