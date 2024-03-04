import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2019Default from './sku-f890-op-2019-default';

describe(`with skuF890Op2019Default preset and default-warehouse channel`, () => {
  it(`should return a skuF890Op2019Default preset`, () => {
    const skuF890Op2019DefaultPreset =
      skuF890Op2019Default().build<TInventoryEntryDraft>();
    expect(skuF890Op2019DefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuF890Op2019Default preset when built for graphql`, () => {
    const skuF890Op2019DefaultPresetGraphql =
      skuF890Op2019Default().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2019DefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2019-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
