import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2019Default from './sku-ff890-op-2019-default';

describe(`with skuFf890Op2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuFf890Op2019Default preset`, () => {
    const skuFf890Op2019DefaultPreset =
      skuFf890Op2019Default().build<TInventoryEntryDraft>();
    expect(skuFf890Op2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2019Default preset when built for graphql`, () => {
    const skuFf890Op2019DefaultPresetGraphql =
      skuFf890Op2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
