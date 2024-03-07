import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2015Eu from './sku-f890-op-2015-eu';

describe(`with skuF890Op2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuF890Op2015Eu preset`, () => {
    const skuF890Op2015EuPreset =
      skuF890Op2015Eu().build<TInventoryEntryDraft>();
    expect(skuF890Op2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuF890Op2015Eu preset when built for graphql`, () => {
    const skuF890Op2015EuPresetGraphql =
      skuF890Op2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
