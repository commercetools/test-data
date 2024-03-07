import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2019Us from './sku-ff890-op-2019-us';

describe(`with skuFf890Op2019Us preset and us-warehouse channel`, () => {
  it(`should return a skuFf890Op2019Us preset`, () => {
    const skuFf890Op2019UsPreset =
      skuFf890Op2019Us().build<TInventoryEntryDraft>();
    expect(skuFf890Op2019UsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuFf890Op2019Us preset when built for graphql`, () => {
    const skuFf890Op2019UsPresetGraphql =
      skuFf890Op2019Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2019UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2019-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2019",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
