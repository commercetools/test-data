import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2015Us from './sku-x234-wx-2015-us';

describe(`with skuX234Wx2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuX234Wx2015Us preset`, () => {
    const skuX234Wx2015UsPreset =
      skuX234Wx2015Us().build<TInventoryEntryDraft>();
    expect(skuX234Wx2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuX234Wx2015Us preset when built for graphql`, () => {
    const skuX234Wx2015UsPresetGraphql =
      skuX234Wx2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
