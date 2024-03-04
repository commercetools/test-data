import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2023Us from './sku-dd234-wx-2023-us';

describe(`with skuDd234Wx2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuDd234Wx2023Us preset`, () => {
    const skuDd234Wx2023UsPreset =
      skuDd234Wx2023Us().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2023UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDd234Wx2023Us preset when built for graphql`, () => {
    const skuDd234Wx2023UsPresetGraphql =
      skuDd234Wx2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2023",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
