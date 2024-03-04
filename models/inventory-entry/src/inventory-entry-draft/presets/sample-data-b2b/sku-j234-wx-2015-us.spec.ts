import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2015Us from './sku-j234-wx-2015-us';

describe(`with skuJ234Wx2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuJ234Wx2015Us preset`, () => {
    const skuJ234Wx2015UsPreset =
      skuJ234Wx2015Us().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2015Us preset when built for graphql`, () => {
    const skuJ234Wx2015UsPresetGraphql =
      skuJ234Wx2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
