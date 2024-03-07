import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2023Eu from './sku-gg123-qr-2023-eu';

describe(`with skuGg123Qr2023Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuGg123Qr2023Eu preset`, () => {
    const skuGg123Qr2023EuPreset =
      skuGg123Qr2023Eu().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2023EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuGg123Qr2023Eu preset when built for graphql`, () => {
    const skuGg123Qr2023EuPresetGraphql =
      skuGg123Qr2023Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2023EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2023-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2023",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
