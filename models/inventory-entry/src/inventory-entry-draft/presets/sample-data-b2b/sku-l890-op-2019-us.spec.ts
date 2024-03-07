import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2019Us from './sku-l890-op-2019-us';

describe(`with skuL890Op2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuL890Op2019Us preset`, () => {
    const skuL890Op2019UsPreset =
      skuL890Op2019Us().build<TInventoryEntryDraft>();
    expect(skuL890Op2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2019Us preset when built for graphql`, () => {
    const skuL890Op2019UsPresetGraphql =
      skuL890Op2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
