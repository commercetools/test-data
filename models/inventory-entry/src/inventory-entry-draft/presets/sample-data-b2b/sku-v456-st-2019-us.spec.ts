import type { TInventoryEntryDraft } from '../../../types';
import skuV456St2019Us from './sku-v456-st-2019-us';

describe(`with skuV456St2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuV456St2019Us preset`, () => {
    const skuV456St2019UsPreset =
      skuV456St2019Us().build<TInventoryEntryDraft>();
    expect(skuV456St2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuV456St2019Us preset when built for graphql`, () => {
    const skuV456St2019UsPresetGraphql =
      skuV456St2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuV456St2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "v456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "v456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
