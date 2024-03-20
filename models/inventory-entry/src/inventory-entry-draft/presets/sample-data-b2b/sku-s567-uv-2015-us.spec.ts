import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2015Us from './sku-s567-uv-2015-us';

describe(`with skuS567Uv2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuS567Uv2015Us preset`, () => {
    const skuS567Uv2015UsPreset =
      skuS567Uv2015Us().build<TInventoryEntryDraft>();
    expect(skuS567Uv2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuS567Uv2015Us preset when built for graphql`, () => {
    const skuS567Uv2015UsPresetGraphql =
      skuS567Uv2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
