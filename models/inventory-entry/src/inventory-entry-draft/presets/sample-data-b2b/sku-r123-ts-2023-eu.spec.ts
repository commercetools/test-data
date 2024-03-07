import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2023Eu from './sku-r123-ts-2023-eu';

describe(`with skuR123Ts2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuR123Ts2023Eu preset`, () => {
    const skuR123Ts2023EuPreset =
      skuR123Ts2023Eu().build<TInventoryEntryDraft>();
    expect(skuR123Ts2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuR123Ts2023Eu preset when built for graphql`, () => {
    const skuR123Ts2023EuPresetGraphql =
      skuR123Ts2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
