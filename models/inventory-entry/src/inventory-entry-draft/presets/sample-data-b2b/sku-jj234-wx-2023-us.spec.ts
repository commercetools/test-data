import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2023Us from './sku-jj234-wx-2023-us';

describe(`with skuJj234Wx2023Us preset and us-warehouse channel`, () => {
  it(`should return a skuJj234Wx2023Us preset`, () => {
    const skuJj234Wx2023UsPreset =
      skuJj234Wx2023Us().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2023UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJj234Wx2023Us preset when built for graphql`, () => {
    const skuJj234Wx2023UsPresetGraphql =
      skuJj234Wx2023Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2023UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2023-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
