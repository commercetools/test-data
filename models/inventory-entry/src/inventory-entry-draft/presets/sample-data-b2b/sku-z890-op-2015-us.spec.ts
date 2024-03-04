import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2015Us from './sku-z890-op-2015-us';

describe(`with skuZ890Op2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuZ890Op2015Us preset`, () => {
    const skuZ890Op2015UsPreset =
      skuZ890Op2015Us().build<TInventoryEntryDraft>();
    expect(skuZ890Op2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZ890Op2015Us preset when built for graphql`, () => {
    const skuZ890Op2015UsPresetGraphql =
      skuZ890Op2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
