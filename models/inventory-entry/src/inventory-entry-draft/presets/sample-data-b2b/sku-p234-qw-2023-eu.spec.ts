import type { TInventoryEntryDraft } from '../../../types';
import skuP234Qw2023Eu from './sku-p234-qw-2023-eu';

describe(`with skuP234Qw2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuP234Qw2023Eu preset`, () => {
    const skuP234Qw2023EuPreset =
      skuP234Qw2023Eu().build<TInventoryEntryDraft>();
    expect(skuP234Qw2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuP234Qw2023Eu preset when built for graphql`, () => {
    const skuP234Qw2023EuPresetGraphql =
      skuP234Qw2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuP234Qw2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "p234-qw-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "p234-qw-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
