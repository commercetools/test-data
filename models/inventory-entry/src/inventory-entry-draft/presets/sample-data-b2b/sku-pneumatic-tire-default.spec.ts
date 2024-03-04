import type { TInventoryEntryDraft } from '../../../types';
import skuPneumaticTireDefault from './sku-pneumatic-tire-default';

describe(`with skuPneumaticTireDefault preset and default-warehouse channel`, () => {
  it(`should return a skuPneumaticTireDefault preset`, () => {
    const skuPneumaticTireDefaultPreset =
      skuPneumaticTireDefault().build<TInventoryEntryDraft>();
    expect(skuPneumaticTireDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuPneumaticTireDefault preset when built for graphql`, () => {
    const skuPneumaticTireDefaultPresetGraphql =
      skuPneumaticTireDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuPneumaticTireDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pneumatic-tire-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pneumatic-tire",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
