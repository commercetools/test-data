import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2015Us from './sku-hh456-st-2015-us';

describe(`with skuHh456St2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuHh456St2015Us preset`, () => {
    const skuHh456St2015UsPreset =
      skuHh456St2015Us().build<TInventoryEntryDraft>();
    expect(skuHh456St2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuHh456St2015Us preset when built for graphql`, () => {
    const skuHh456St2015UsPresetGraphql =
      skuHh456St2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
