import type { TInventoryEntryDraft } from '../../../types';
import skuOo789Uv2019Us from './sku-oo789-uv-2019-us';

describe(`with skuOo789Uv2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuOo789Uv2019Us preset`, () => {
    const skuOo789Uv2019UsPreset =
      skuOo789Uv2019Us().build<TInventoryEntryDraft>();
    expect(skuOo789Uv2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuOo789Uv2019Us preset when built for graphql`, () => {
    const skuOo789Uv2019UsPresetGraphql =
      skuOo789Uv2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuOo789Uv2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "oo789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "oo789-uv-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
