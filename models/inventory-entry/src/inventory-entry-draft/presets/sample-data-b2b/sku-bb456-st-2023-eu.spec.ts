import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2023Eu from './sku-bb456-st-2023-eu';

describe(`with skuBb456St2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuBb456St2023Eu preset`, () => {
    const skuBb456St2023EuPreset =
      skuBb456St2023Eu().build<TInventoryEntryDraft>();
    expect(skuBb456St2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBb456St2023Eu preset when built for graphql`, () => {
    const skuBb456St2023EuPresetGraphql =
      skuBb456St2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
