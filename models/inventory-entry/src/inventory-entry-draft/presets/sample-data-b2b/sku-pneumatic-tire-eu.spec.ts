import type { TInventoryEntryDraft } from '../../../types';
import skuPneumaticTireEu from './sku-pneumatic-tire-eu';

describe(`with skuPneumaticTireEu preset and eu-warehouse channel`, () => {
  it(`should return a skuPneumaticTireEu preset`, () => {
    const skuPneumaticTireEuPreset =
      skuPneumaticTireEu().build<TInventoryEntryDraft>();
    expect(skuPneumaticTireEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPneumaticTireEu preset when built for graphql`, () => {
    const skuPneumaticTireEuPresetGraphql =
      skuPneumaticTireEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuPneumaticTireEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": undefined,
      }
    `);
  });
});
