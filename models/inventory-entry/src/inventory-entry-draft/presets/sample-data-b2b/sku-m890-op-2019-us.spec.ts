import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2019Us from './sku-m890-op-2019-us';

describe(`with skuM890Op2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuM890Op2019Us preset`, () => {
    const skuM890Op2019UsPreset =
      skuM890Op2019Us().build<TInventoryEntryDraft>();
    expect(skuM890Op2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuM890Op2019Us preset when built for graphql`, () => {
    const skuM890Op2019UsPresetGraphql =
      skuM890Op2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
