import type { TInventoryEntryDraft } from '../../../types';
import skuM890Op2023Eu from './sku-m890-op-2023-eu';

describe(`with skuM890Op2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuM890Op2023Eu preset`, () => {
    const skuM890Op2023EuPreset =
      skuM890Op2023Eu().build<TInventoryEntryDraft>();
    expect(skuM890Op2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuM890Op2023Eu preset when built for graphql`, () => {
    const skuM890Op2023EuPresetGraphql =
      skuM890Op2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuM890Op2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "m890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "m890-op-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
