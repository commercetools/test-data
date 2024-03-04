import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2019Us from './sku-bb456-st-2019-us';

describe(`with skuBb456St2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuBb456St2019Us preset`, () => {
    const skuBb456St2019UsPreset =
      skuBb456St2019Us().build<TInventoryEntryDraft>();
    expect(skuBb456St2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2019Us preset when built for graphql`, () => {
    const skuBb456St2019UsPresetGraphql =
      skuBb456St2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
