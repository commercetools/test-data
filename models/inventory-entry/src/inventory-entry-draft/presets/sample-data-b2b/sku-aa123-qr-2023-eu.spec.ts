import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2023Eu from './sku-aa123-qr-2023-eu';

describe(`with skuAa123Qr2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuAa123Qr2023Eu preset`, () => {
    const skuAa123Qr2023EuPreset =
      skuAa123Qr2023Eu().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAa123Qr2023Eu preset when built for graphql`, () => {
    const skuAa123Qr2023EuPresetGraphql =
      skuAa123Qr2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
