import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2023Us from './sku-j234-wx-2023-us';

describe(`with skuJ234Wx2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuJ234Wx2023Us preset`, () => {
    const skuJ234Wx2023UsPreset =
      skuJ234Wx2023Us().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2023Us preset when built for graphql`, () => {
    const skuJ234Wx2023UsPresetGraphql =
      skuJ234Wx2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
