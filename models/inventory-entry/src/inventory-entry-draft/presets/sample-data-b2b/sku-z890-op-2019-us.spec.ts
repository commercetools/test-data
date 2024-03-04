import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2019Us from './sku-z890-op-2019-us';

describe(`with skuZ890Op2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuZ890Op2019Us preset`, () => {
    const skuZ890Op2019UsPreset =
      skuZ890Op2019Us().build<TInventoryEntryDraft>();
    expect(skuZ890Op2019UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuZ890Op2019Us preset when built for graphql`, () => {
    const skuZ890Op2019UsPresetGraphql =
      skuZ890Op2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
