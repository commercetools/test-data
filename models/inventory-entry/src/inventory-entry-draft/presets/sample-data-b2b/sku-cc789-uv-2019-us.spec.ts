import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2019Us from './sku-cc789-uv-2019-us';

describe(`with skuCc789Uv2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuCc789Uv2019Us preset`, () => {
    const skuCc789Uv2019UsPreset =
      skuCc789Uv2019Us().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuCc789Uv2019Us preset when built for graphql`, () => {
    const skuCc789Uv2019UsPresetGraphql =
      skuCc789Uv2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
