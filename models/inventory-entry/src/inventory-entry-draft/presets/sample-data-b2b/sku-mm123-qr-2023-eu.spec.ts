import type { TInventoryEntryDraft } from '../../../types';
import skuMm123Qr2023Eu from './sku-mm123-qr-2023-eu';

describe(`with skuMm123Qr2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuMm123Qr2023Eu preset`, () => {
    const skuMm123Qr2023EuPreset =
      skuMm123Qr2023Eu().build<TInventoryEntryDraft>();
    expect(skuMm123Qr2023EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuMm123Qr2023Eu preset when built for graphql`, () => {
    const skuMm123Qr2023EuPresetGraphql =
      skuMm123Qr2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuMm123Qr2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "mm123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "mm123-qr-2023",
        "supplyChannel": undefined,
      }
    `);
  });
});
