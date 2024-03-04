import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2019Us from './sku-jj234-wx-2019-us';

describe(`with skuJj234Wx2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuJj234Wx2019Us preset`, () => {
    const skuJj234Wx2019UsPreset =
      skuJj234Wx2019Us().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuJj234Wx2019Us preset when built for graphql`, () => {
    const skuJj234Wx2019UsPresetGraphql =
      skuJj234Wx2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
