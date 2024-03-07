import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2015Us from './sku-v456-st-2015-us';

describe(`with skuV456St2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuV456St2015Us preset`, () => {
    const skuV456St2015UsPreset =
      skuV456St2015Us().build<TInventoryEntryDraft>();
    expect(skuV456St2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuV456St2015Us preset when built for graphql`, () => {
    const skuV456St2015UsPresetGraphql =
      skuV456St2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
