import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2015Us from './sku-ll890-op-2015-us';

describe(`with skuLl890Op2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuLl890Op2015Us preset`, () => {
    const skuLl890Op2015UsPreset =
      skuLl890Op2015Us().build<TInventoryEntryDraft>();
    expect(skuLl890Op2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLl890Op2015Us preset when built for graphql`, () => {
    const skuLl890Op2015UsPresetGraphql =
      skuLl890Op2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
