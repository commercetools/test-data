import type { TInventoryEntryDraft } from '../../../types';
import skuW789Uv2023Us from './sku-w789-uv-2023-us';

describe(`with skuW789Uv2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuW789Uv2023Us preset`, () => {
    const skuW789Uv2023UsPreset =
      skuW789Uv2023Us().build<TInventoryEntryDraft>();
    expect(skuW789Uv2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuW789Uv2023Us preset when built for graphql`, () => {
    const skuW789Uv2023UsPresetGraphql =
      skuW789Uv2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuW789Uv2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "w789-uv-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "w789-uv-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
