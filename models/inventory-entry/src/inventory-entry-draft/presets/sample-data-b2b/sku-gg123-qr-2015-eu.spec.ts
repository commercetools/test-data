import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2015Eu from './sku-gg123-qr-2015-eu';

describe(`with skuGg123Qr2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuGg123Qr2015Eu preset`, () => {
    const skuGg123Qr2015EuPreset =
      skuGg123Qr2015Eu().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGg123Qr2015Eu preset when built for graphql`, () => {
    const skuGg123Qr2015EuPresetGraphql =
      skuGg123Qr2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
