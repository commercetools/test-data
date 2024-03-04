import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2015Us from './sku-c789-uv-2015-us';

describe(`with skuC789Uv2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuC789Uv2015Us preset`, () => {
    const skuC789Uv2015UsPreset =
      skuC789Uv2015Us().build<TInventoryEntryDraft>();
    expect(skuC789Uv2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuC789Uv2015Us preset when built for graphql`, () => {
    const skuC789Uv2015UsPresetGraphql =
      skuC789Uv2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
