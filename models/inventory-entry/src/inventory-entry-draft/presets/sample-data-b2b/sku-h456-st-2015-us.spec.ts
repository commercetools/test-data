import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2015Us from './sku-h456-st-2015-us';

describe(`with skuH456St2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuH456St2015Us preset`, () => {
    const skuH456St2015UsPreset =
      skuH456St2015Us().build<TInventoryEntryDraft>();
    expect(skuH456St2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2015Us preset when built for graphql`, () => {
    const skuH456St2015UsPresetGraphql =
      skuH456St2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
