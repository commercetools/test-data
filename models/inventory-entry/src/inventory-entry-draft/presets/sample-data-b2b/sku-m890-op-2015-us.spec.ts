import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2015Us from './sku-m890-op-2015-us';

describe(`with skuM890Op2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuM890Op2015Us preset`, () => {
    const skuM890Op2015UsPreset =
      skuM890Op2015Us().build<TInventoryEntryDraft>();
    expect(skuM890Op2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuM890Op2015Us preset when built for graphql`, () => {
    const skuM890Op2015UsPresetGraphql =
      skuM890Op2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
