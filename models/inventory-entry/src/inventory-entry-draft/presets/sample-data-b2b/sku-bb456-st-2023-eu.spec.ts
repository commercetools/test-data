import type { TInventoryEntryDraft } from '../../../types';
import skuBb456St2023Eu from './sku-bb456-st-2023-eu';

describe(`with skuBb456St2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuBb456St2023Eu preset`, () => {
    const skuBb456St2023EuPreset =
      skuBb456St2023Eu().build<TInventoryEntryDraft>();
    expect(skuBb456St2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuBb456St2023Eu preset when built for graphql`, () => {
    const skuBb456St2023EuPresetGraphql =
      skuBb456St2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuBb456St2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "bb456-st-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "bb456-st-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
