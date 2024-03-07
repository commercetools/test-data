import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2015Default from './sku-f890-op-2015-default';

describe(`with skuF890Op2015Default preset and default-warehouse channel`, () => {
  it(`should return a skuF890Op2015Default preset`, () => {
    const skuF890Op2015DefaultPreset =
      skuF890Op2015Default().build<TInventoryEntryDraft>();
    expect(skuF890Op2015DefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuF890Op2015Default preset when built for graphql`, () => {
    const skuF890Op2015DefaultPresetGraphql =
      skuF890Op2015Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2015DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
