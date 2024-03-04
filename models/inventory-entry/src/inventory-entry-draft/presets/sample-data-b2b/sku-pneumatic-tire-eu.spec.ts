import type { TInventoryEntryDraft } from '../../../types';
import skuPneumaticTireEu from './sku-pneumatic-tire-eu';

describe(`with skuPneumaticTireEu preset and eu-warehouse channel`, () => {
  it(`should return a skuPneumaticTireEu preset`, () => {
    const skuPneumaticTireEuPreset =
      skuPneumaticTireEu().build<TInventoryEntryDraft>();
    expect(skuPneumaticTireEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPneumaticTireEu preset when built for graphql`, () => {
    const skuPneumaticTireEuPresetGraphql =
      skuPneumaticTireEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuPneumaticTireEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
