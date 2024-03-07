import type { TInventoryEntryDraft } from '../../../types';
import skuPneumaticTireUs from './sku-pneumatic-tire-us';

describe(`with skuPneumaticTireUs preset and us-warehouse channel`, () => {
  it(`should return a skuPneumaticTireUs preset`, () => {
    const skuPneumaticTireUsPreset =
      skuPneumaticTireUs().build<TInventoryEntryDraft>();
    expect(skuPneumaticTireUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPneumaticTireUs preset when built for graphql`, () => {
    const skuPneumaticTireUsPresetGraphql =
      skuPneumaticTireUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuPneumaticTireUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
