import type { TInventoryEntryDraft } from '../../../types';
import skuGg123Qr2019Eu from './sku-gg123-qr-2019-eu';

describe(`with skuGg123Qr2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuGg123Qr2019Eu preset`, () => {
    const skuGg123Qr2019EuPreset =
      skuGg123Qr2019Eu().build<TInventoryEntryDraft>();
    expect(skuGg123Qr2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuGg123Qr2019Eu preset when built for graphql`, () => {
    const skuGg123Qr2019EuPresetGraphql =
      skuGg123Qr2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuGg123Qr2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "gg123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "gg123-qr-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
