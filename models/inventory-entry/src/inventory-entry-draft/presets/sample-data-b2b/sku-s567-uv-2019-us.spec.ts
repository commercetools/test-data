import type { TInventoryEntryDraft } from '../../../types';
import skuS567Uv2019Us from './sku-s567-uv-2019-us';

describe(`with skuS567Uv2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuS567Uv2019Us preset`, () => {
    const skuS567Uv2019UsPreset =
      skuS567Uv2019Us().build<TInventoryEntryDraft>();
    expect(skuS567Uv2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuS567Uv2019Us preset when built for graphql`, () => {
    const skuS567Uv2019UsPresetGraphql =
      skuS567Uv2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuS567Uv2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "s567-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "s567-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
