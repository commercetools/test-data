import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2023Eu from './sku-f890-op-2023-eu';

describe(`with skuF890Op2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuF890Op2023Eu preset`, () => {
    const skuF890Op2023EuPreset =
      skuF890Op2023Eu().build<TInventoryEntryDraft>();
    expect(skuF890Op2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuF890Op2023Eu preset when built for graphql`, () => {
    const skuF890Op2023EuPresetGraphql =
      skuF890Op2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
