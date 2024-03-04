import type { TInventoryEntryDraft } from '../../../types';
import skuPp234Wx2015Us from './sku-pp234-wx-2015-us';

describe(`with skuPp234Wx2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuPp234Wx2015Us preset`, () => {
    const skuPp234Wx2015UsPreset =
      skuPp234Wx2015Us().build<TInventoryEntryDraft>();
    expect(skuPp234Wx2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuPp234Wx2015Us preset when built for graphql`, () => {
    const skuPp234Wx2015UsPresetGraphql =
      skuPp234Wx2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuPp234Wx2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "pp234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "pp234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
