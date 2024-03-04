import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2023Us from './sku-x234-wx-2023-us';

describe(`with skuX234Wx2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuX234Wx2023Us preset`, () => {
    const skuX234Wx2023UsPreset =
      skuX234Wx2023Us().build<TInventoryEntryDraft>();
    expect(skuX234Wx2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX234Wx2023Us preset when built for graphql`, () => {
    const skuX234Wx2023UsPresetGraphql =
      skuX234Wx2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
