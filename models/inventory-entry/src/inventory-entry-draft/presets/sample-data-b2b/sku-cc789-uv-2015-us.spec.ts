import type { TInventoryEntryDraft } from '../../../types';
import skuCc789Uv2015Us from './sku-cc789-uv-2015-us';

describe(`with skuCc789Uv2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuCc789Uv2015Us preset`, () => {
    const skuCc789Uv2015UsPreset =
      skuCc789Uv2015Us().build<TInventoryEntryDraft>();
    expect(skuCc789Uv2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuCc789Uv2015Us preset when built for graphql`, () => {
    const skuCc789Uv2015UsPresetGraphql =
      skuCc789Uv2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuCc789Uv2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "cc789-uv-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "cc789-uv-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
