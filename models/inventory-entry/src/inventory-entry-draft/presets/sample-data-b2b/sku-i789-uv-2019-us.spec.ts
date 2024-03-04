import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2019Us from './sku-i789-uv-2019-us';

describe(`with skuI789Uv2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuI789Uv2019Us preset`, () => {
    const skuI789Uv2019UsPreset =
      skuI789Uv2019Us().build<TInventoryEntryDraft>();
    expect(skuI789Uv2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2019Us preset when built for graphql`, () => {
    const skuI789Uv2019UsPresetGraphql =
      skuI789Uv2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
