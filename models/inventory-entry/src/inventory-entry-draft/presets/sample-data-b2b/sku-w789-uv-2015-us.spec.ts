import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2015Us from './sku-w789-uv-2015-us';

describe(`with skuW789Uv2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuW789Uv2015Us preset`, () => {
    const skuW789Uv2015UsPreset =
      skuW789Uv2015Us().build<TInventoryEntryDraft>();
    expect(skuW789Uv2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2015Us preset when built for graphql`, () => {
    const skuW789Uv2015UsPresetGraphql =
      skuW789Uv2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
