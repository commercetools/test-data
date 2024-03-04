import type { TInventoryEntryDraft } from '../../../types';
import skuNn456St2019Us from './sku-nn456-st-2019-us';

describe(`with skuNn456St2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuNn456St2019Us preset`, () => {
    const skuNn456St2019UsPreset =
      skuNn456St2019Us().build<TInventoryEntryDraft>();
    expect(skuNn456St2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuNn456St2019Us preset when built for graphql`, () => {
    const skuNn456St2019UsPresetGraphql =
      skuNn456St2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuNn456St2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "nn456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "nn456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
