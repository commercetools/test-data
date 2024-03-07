import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2015Us from './sku-l890-op-2015-us';

describe(`with skuL890Op2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuL890Op2015Us preset`, () => {
    const skuL890Op2015UsPreset =
      skuL890Op2015Us().build<TInventoryEntryDraft>();
    expect(skuL890Op2015UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2015Us preset when built for graphql`, () => {
    const skuL890Op2015UsPresetGraphql =
      skuL890Op2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2015",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
