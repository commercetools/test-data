import type { TInventoryEntryDraft } from '../../../types';
import skuI789Uv2015Us from './sku-i789-uv-2015-us';

describe(`with skuI789Uv2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuI789Uv2015Us preset`, () => {
    const skuI789Uv2015UsPreset =
      skuI789Uv2015Us().build<TInventoryEntryDraft>();
    expect(skuI789Uv2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuI789Uv2015Us preset when built for graphql`, () => {
    const skuI789Uv2015UsPresetGraphql =
      skuI789Uv2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuI789Uv2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "i789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "i789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
