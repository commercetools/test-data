import type { TInventoryEntryDraft } from '../../../types';
import skuLl890Op2023Eu from './sku-ll890-op-2023-eu';

describe(`with skuLl890Op2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuLl890Op2023Eu preset`, () => {
    const skuLl890Op2023EuPreset =
      skuLl890Op2023Eu().build<TInventoryEntryDraft>();
    expect(skuLl890Op2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuLl890Op2023Eu preset when built for graphql`, () => {
    const skuLl890Op2023EuPresetGraphql =
      skuLl890Op2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuLl890Op2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "ll890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "ll890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
