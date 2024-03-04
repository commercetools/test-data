import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2015Default from './sku-ff890-op-2015-default';

describe(`with skuFf890Op2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuFf890Op2015Default preset`, () => {
    const skuFf890Op2015DefaultPreset =
      skuFf890Op2015Default().build<TInventoryEntryDraft>();
    expect(skuFf890Op2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2015Default preset when built for graphql`, () => {
    const skuFf890Op2015DefaultPresetGraphql =
      skuFf890Op2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
