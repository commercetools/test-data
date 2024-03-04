import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2015Eu from './sku-r123-ts-2015-eu';

describe(`with skuR123Ts2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuR123Ts2015Eu preset`, () => {
    const skuR123Ts2015EuPreset =
      skuR123Ts2015Eu().build<TInventoryEntryDraft>();
    expect(skuR123Ts2015EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuR123Ts2015Eu preset when built for graphql`, () => {
    const skuR123Ts2015EuPresetGraphql =
      skuR123Ts2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2015",
        "supplyChannel": undefined,
      }
    `);
  });
});
