import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2015Us from './sku-nn456-st-2015-us';

describe(`with skuNn456St2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuNn456St2015Us preset`, () => {
    const skuNn456St2015UsPreset =
      skuNn456St2015Us().build<TInventoryEntryDraft>();
    expect(skuNn456St2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuNn456St2015Us preset when built for graphql`, () => {
    const skuNn456St2015UsPresetGraphql =
      skuNn456St2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
