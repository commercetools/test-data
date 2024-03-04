import type { TInventoryEntryDraft } from '../../../types';
import skuAa123Qr2015Eu from './sku-aa123-qr-2015-eu';

describe(`with skuAa123Qr2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuAa123Qr2015Eu preset`, () => {
    const skuAa123Qr2015EuPreset =
      skuAa123Qr2015Eu().build<TInventoryEntryDraft>();
    expect(skuAa123Qr2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAa123Qr2015Eu preset when built for graphql`, () => {
    const skuAa123Qr2015EuPresetGraphql =
      skuAa123Qr2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuAa123Qr2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "aa123-qr-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "aa123-qr-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
