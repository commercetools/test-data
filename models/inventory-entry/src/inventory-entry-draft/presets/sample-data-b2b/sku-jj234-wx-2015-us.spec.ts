import type { TInventoryEntryDraft } from '../../../types';
import skuJj234Wx2015Us from './sku-jj234-wx-2015-us';

describe(`with skuJj234Wx2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuJj234Wx2015Us preset`, () => {
    const skuJj234Wx2015UsPreset =
      skuJj234Wx2015Us().build<TInventoryEntryDraft>();
    expect(skuJj234Wx2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuJj234Wx2015Us preset when built for graphql`, () => {
    const skuJj234Wx2015UsPresetGraphql =
      skuJj234Wx2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuJj234Wx2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "jj234-wx-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "jj234-wx-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
