import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2019Eu from './sku-l890-op-2019-eu';

describe(`with skuL890Op2019Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuL890Op2019Eu preset`, () => {
    const skuL890Op2019EuPreset =
      skuL890Op2019Eu().build<TInventoryEntryDraft>();
    expect(skuL890Op2019EuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuL890Op2019Eu preset when built for graphql`, () => {
    const skuL890Op2019EuPresetGraphql =
      skuL890Op2019Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2019EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2019-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2019",
        "supplyChannel": undefined,
      }
    `);
  });
});
