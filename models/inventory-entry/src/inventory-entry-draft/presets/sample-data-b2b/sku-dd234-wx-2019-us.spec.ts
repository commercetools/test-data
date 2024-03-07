import type { TInventoryEntryDraft } from '../../../types';
import skuDd234Wx2019Us from './sku-dd234-wx-2019-us';

describe(`with skuDd234Wx2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuDd234Wx2019Us preset`, () => {
    const skuDd234Wx2019UsPreset =
      skuDd234Wx2019Us().build<TInventoryEntryDraft>();
    expect(skuDd234Wx2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuDd234Wx2019Us preset when built for graphql`, () => {
    const skuDd234Wx2019UsPresetGraphql =
      skuDd234Wx2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuDd234Wx2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "dd234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "dd234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
