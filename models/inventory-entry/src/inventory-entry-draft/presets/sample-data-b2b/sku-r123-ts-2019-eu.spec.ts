import type { TInventoryEntryDraft } from '../../../types';
import skuR123Ts2019Eu from './sku-r123-ts-2019-eu';

describe(`with skuR123Ts2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuR123Ts2019Eu preset`, () => {
    const skuR123Ts2019EuPreset =
      skuR123Ts2019Eu().build<TInventoryEntryDraft>();
    expect(skuR123Ts2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuR123Ts2019Eu preset when built for graphql`, () => {
    const skuR123Ts2019EuPresetGraphql =
      skuR123Ts2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuR123Ts2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "r123-ts-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "r123-ts-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
