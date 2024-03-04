import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2019Eu from './sku-aa123-qr-2019-eu';

describe(`with skuAa123Qr2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuAa123Qr2019Eu preset`, () => {
    const skuAa123Qr2019EuPreset =
      skuAa123Qr2019Eu().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2019EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAa123Qr2019Eu preset when built for graphql`, () => {
    const skuAa123Qr2019EuPresetGraphql =
      skuAa123Qr2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2019",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
