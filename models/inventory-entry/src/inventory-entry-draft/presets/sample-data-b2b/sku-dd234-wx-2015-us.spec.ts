import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2015Us from './sku-dd234-wx-2015-us';

describe(`with skuDd234Wx2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuDd234Wx2015Us preset`, () => {
    const skuDd234Wx2015UsPreset =
      skuDd234Wx2015Us().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuDd234Wx2015Us preset when built for graphql`, () => {
    const skuDd234Wx2015UsPresetGraphql =
      skuDd234Wx2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
