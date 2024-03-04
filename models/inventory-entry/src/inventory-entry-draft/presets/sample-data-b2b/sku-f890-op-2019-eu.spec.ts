import type { TInventoryEntryDraft } from '../../../types';
import skuF890Op2019Eu from './sku-f890-op-2019-eu';

describe(`with skuF890Op2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuF890Op2019Eu preset`, () => {
    const skuF890Op2019EuPreset =
      skuF890Op2019Eu().build<TInventoryEntryDraft>();
    expect(skuF890Op2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuF890Op2019Eu preset when built for graphql`, () => {
    const skuF890Op2019EuPresetGraphql =
      skuF890Op2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuF890Op2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "f890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "f890-op-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
