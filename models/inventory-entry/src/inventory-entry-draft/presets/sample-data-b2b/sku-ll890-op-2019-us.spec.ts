import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2019Us from './sku-ll890-op-2019-us';

describe(`with skuLl890Op2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuLl890Op2019Us preset`, () => {
    const skuLl890Op2019UsPreset =
      skuLl890Op2019Us().build<TInventoryEntryDraft>();
    expect(skuLl890Op2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuLl890Op2019Us preset when built for graphql`, () => {
    const skuLl890Op2019UsPresetGraphql =
      skuLl890Op2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
