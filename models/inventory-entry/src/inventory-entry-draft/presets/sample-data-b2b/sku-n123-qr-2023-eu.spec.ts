import type { TInventoryEntryDraft } from '../../../types';
import skuN123Qr2023Eu from './sku-n123-qr-2023-eu';

describe(`with skuN123Qr2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuN123Qr2023Eu preset`, () => {
    const skuN123Qr2023EuPreset =
      skuN123Qr2023Eu().build<TInventoryEntryDraft>();
    expect(skuN123Qr2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuN123Qr2023Eu preset when built for graphql`, () => {
    const skuN123Qr2023EuPresetGraphql =
      skuN123Qr2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuN123Qr2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "n123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "n123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
