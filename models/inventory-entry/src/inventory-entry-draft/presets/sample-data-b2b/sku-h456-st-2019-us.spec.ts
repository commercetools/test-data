import type { TInventoryEntryDraft } from '../../../types';
import skuH456St2019Us from './sku-h456-st-2019-us';

describe(`with skuH456St2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuH456St2019Us preset`, () => {
    const skuH456St2019UsPreset =
      skuH456St2019Us().build<TInventoryEntryDraft>();
    expect(skuH456St2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuH456St2019Us preset when built for graphql`, () => {
    const skuH456St2019UsPresetGraphql =
      skuH456St2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuH456St2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "h456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "h456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
