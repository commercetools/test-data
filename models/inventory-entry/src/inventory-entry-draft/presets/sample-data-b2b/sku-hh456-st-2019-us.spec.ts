import type { TInventoryEntryDraft } from '../../../types';
import skuHh456St2019Us from './sku-hh456-st-2019-us';

describe(`with skuHh456St2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuHh456St2019Us preset`, () => {
    const skuHh456St2019UsPreset =
      skuHh456St2019Us().build<TInventoryEntryDraft>();
    expect(skuHh456St2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuHh456St2019Us preset when built for graphql`, () => {
    const skuHh456St2019UsPresetGraphql =
      skuHh456St2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuHh456St2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "hh456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "hh456-st-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
