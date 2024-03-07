import type { TInventoryEntryDraft } from '../../../types';
import skuIi789Uv2019Us from './sku-ii789-uv-2019-us';

describe(`with skuIi789Uv2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuIi789Uv2019Us preset`, () => {
    const skuIi789Uv2019UsPreset =
      skuIi789Uv2019Us().build<TInventoryEntryDraft>();
    expect(skuIi789Uv2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuIi789Uv2019Us preset when built for graphql`, () => {
    const skuIi789Uv2019UsPresetGraphql =
      skuIi789Uv2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuIi789Uv2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ii789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ii789-uv-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
