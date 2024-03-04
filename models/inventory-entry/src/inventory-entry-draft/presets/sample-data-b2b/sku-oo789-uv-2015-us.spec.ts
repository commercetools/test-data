import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2015Us from './sku-oo789-uv-2015-us';

describe(`with skuOo789Uv2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuOo789Uv2015Us preset`, () => {
    const skuOo789Uv2015UsPreset =
      skuOo789Uv2015Us().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2015Us preset when built for graphql`, () => {
    const skuOo789Uv2015UsPresetGraphql =
      skuOo789Uv2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
