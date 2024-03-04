import type { TInventoryEntryDraft } from '../../../types';
import skuFf890Op2023Eu from './sku-ff890-op-2023-eu';

describe(`with skuFf890Op2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuFf890Op2023Eu preset`, () => {
    const skuFf890Op2023EuPreset =
      skuFf890Op2023Eu().build<TInventoryEntryDraft>();
    expect(skuFf890Op2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuFf890Op2023Eu preset when built for graphql`, () => {
    const skuFf890Op2023EuPresetGraphql =
      skuFf890Op2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuFf890Op2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ff890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ff890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
