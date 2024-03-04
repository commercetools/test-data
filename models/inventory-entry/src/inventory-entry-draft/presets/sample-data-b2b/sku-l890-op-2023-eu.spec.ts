import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2023Eu from './sku-l890-op-2023-eu';

describe(`with skuL890Op2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuL890Op2023Eu preset`, () => {
    const skuL890Op2023EuPreset =
      skuL890Op2023Eu().build<TInventoryEntryDraft>();
    expect(skuL890Op2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2023Eu preset when built for graphql`, () => {
    const skuL890Op2023EuPresetGraphql =
      skuL890Op2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
