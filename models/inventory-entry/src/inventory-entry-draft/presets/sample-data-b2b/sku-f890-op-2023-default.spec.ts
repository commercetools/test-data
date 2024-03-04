import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2023Default from './sku-f890-op-2023-default';

describe(`with skuF890Op2023Default preset and default-warehouse channel`, () => {
  it(`should return a skuF890Op2023Default preset`, () => {
    const skuF890Op2023DefaultPreset =
      skuF890Op2023Default().build<TInventoryEntryDraft>();
    expect(skuF890Op2023DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuF890Op2023Default preset when built for graphql`, () => {
    const skuF890Op2023DefaultPresetGraphql =
      skuF890Op2023Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2023DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2023-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
