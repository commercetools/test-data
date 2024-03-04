import type { TInventoryEntryDraft } from '../../../types';
import skuC789Uv2019Us from './sku-c789-uv-2019-us';

describe(`with skuC789Uv2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuC789Uv2019Us preset`, () => {
    const skuC789Uv2019UsPreset =
      skuC789Uv2019Us().build<TInventoryEntryDraft>();
    expect(skuC789Uv2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuC789Uv2019Us preset when built for graphql`, () => {
    const skuC789Uv2019UsPresetGraphql =
      skuC789Uv2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuC789Uv2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "c789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "c789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
