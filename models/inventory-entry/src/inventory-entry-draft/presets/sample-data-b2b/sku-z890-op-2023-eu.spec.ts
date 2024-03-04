import type { TInventoryEntryDraft } from '../../../types';
import skuZ890Op2023Eu from './sku-z890-op-2023-eu';

describe(`with skuZ890Op2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuZ890Op2023Eu preset`, () => {
    const skuZ890Op2023EuPreset =
      skuZ890Op2023Eu().build<TInventoryEntryDraft>();
    expect(skuZ890Op2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuZ890Op2023Eu preset when built for graphql`, () => {
    const skuZ890Op2023EuPresetGraphql =
      skuZ890Op2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuZ890Op2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "z890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "z890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
