import type { TInventoryEntryDraft } from '../../../types';
import skuU123Qr2023Eu from './sku-u123-qr-2023-eu';

describe(`with skuU123Qr2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuU123Qr2023Eu preset`, () => {
    const skuU123Qr2023EuPreset =
      skuU123Qr2023Eu().build<TInventoryEntryDraft>();
    expect(skuU123Qr2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuU123Qr2023Eu preset when built for graphql`, () => {
    const skuU123Qr2023EuPresetGraphql =
      skuU123Qr2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuU123Qr2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "u123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "u123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
