import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2015Us from './sku-bb456-st-2015-us';

describe(`with skuBb456St2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuBb456St2015Us preset`, () => {
    const skuBb456St2015UsPreset =
      skuBb456St2015Us().build<TInventoryEntryDraft>();
    expect(skuBb456St2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2015Us preset when built for graphql`, () => {
    const skuBb456St2015UsPresetGraphql =
      skuBb456St2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
