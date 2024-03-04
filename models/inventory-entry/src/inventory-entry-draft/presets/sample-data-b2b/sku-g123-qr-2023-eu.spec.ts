import type { TInventoryEntryDraft } from '../../../types';
import skuG123Qr2023Eu from './sku-g123-qr-2023-eu';

describe(`with skuG123Qr2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuG123Qr2023Eu preset`, () => {
    const skuG123Qr2023EuPreset =
      skuG123Qr2023Eu().build<TInventoryEntryDraft>();
    expect(skuG123Qr2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuG123Qr2023Eu preset when built for graphql`, () => {
    const skuG123Qr2023EuPresetGraphql =
      skuG123Qr2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuG123Qr2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "g123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "g123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
