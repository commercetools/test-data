import type { TInventoryEntryDraft } from '../../../types';
import skuJ234Wx2019Us from './sku-j234-wx-2019-us';

describe(`with skuJ234Wx2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuJ234Wx2019Us preset`, () => {
    const skuJ234Wx2019UsPreset =
      skuJ234Wx2019Us().build<TInventoryEntryDraft>();
    expect(skuJ234Wx2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJ234Wx2019Us preset when built for graphql`, () => {
    const skuJ234Wx2019UsPresetGraphql =
      skuJ234Wx2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuJ234Wx2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "j234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "j234-wx-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
