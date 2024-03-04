import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2023Default from './sku-ff890-op-2023-default';

describe(`with skuFf890Op2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuFf890Op2023Default preset`, () => {
    const skuFf890Op2023DefaultPreset =
      skuFf890Op2023Default().build<TInventoryEntryDraft>();
    expect(skuFf890Op2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2023Default preset when built for graphql`, () => {
    const skuFf890Op2023DefaultPresetGraphql =
      skuFf890Op2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
