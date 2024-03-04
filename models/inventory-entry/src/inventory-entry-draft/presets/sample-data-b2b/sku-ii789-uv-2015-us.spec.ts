import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2015Us from './sku-ii789-uv-2015-us';

describe(`with skuIi789Uv2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuIi789Uv2015Us preset`, () => {
    const skuIi789Uv2015UsPreset =
      skuIi789Uv2015Us().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuIi789Uv2015Us preset when built for graphql`, () => {
    const skuIi789Uv2015UsPresetGraphql =
      skuIi789Uv2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
