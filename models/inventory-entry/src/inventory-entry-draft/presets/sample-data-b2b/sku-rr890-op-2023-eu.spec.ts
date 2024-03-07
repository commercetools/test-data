import type { TInventoryEntryDraft } from '../../../types';
import skuRr890Op2023Eu from './sku-rr890-op-2023-eu';

describe(`with skuRr890Op2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuRr890Op2023Eu preset`, () => {
    const skuRr890Op2023EuPreset =
      skuRr890Op2023Eu().build<TInventoryEntryDraft>();
    expect(skuRr890Op2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuRr890Op2023Eu preset when built for graphql`, () => {
    const skuRr890Op2023EuPresetGraphql =
      skuRr890Op2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuRr890Op2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "rr890-op-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "rr890-op-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
