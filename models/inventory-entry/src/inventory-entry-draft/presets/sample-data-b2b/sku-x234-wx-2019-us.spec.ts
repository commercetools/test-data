import type { TInventoryEntryDraft } from '../../../types';
import skuX234Wx2019Us from './sku-x234-wx-2019-us';

describe(`with skuX234Wx2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuX234Wx2019Us preset`, () => {
    const skuX234Wx2019UsPreset =
      skuX234Wx2019Us().build<TInventoryEntryDraft>();
    expect(skuX234Wx2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuX234Wx2019Us preset when built for graphql`, () => {
    const skuX234Wx2019UsPresetGraphql =
      skuX234Wx2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuX234Wx2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "x234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "x234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
