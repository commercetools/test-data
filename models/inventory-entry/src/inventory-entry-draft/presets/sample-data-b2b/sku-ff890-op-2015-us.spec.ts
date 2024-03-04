import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2015Us from './sku-ff890-op-2015-us';

describe(`with skuFf890Op2015Us preset and us-warehouse channel`, () => {
  it(`should return a skuFf890Op2015Us preset`, () => {
    const skuFf890Op2015UsPreset =
      skuFf890Op2015Us().build<TInventoryEntryDraft>();
    expect(skuFf890Op2015UsPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2015Us preset when built for graphql`, () => {
    const skuFf890Op2015UsPresetGraphql =
      skuFf890Op2015Us().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2015UsPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2015-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
