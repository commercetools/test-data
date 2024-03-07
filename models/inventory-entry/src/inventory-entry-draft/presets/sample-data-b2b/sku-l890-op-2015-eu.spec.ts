import type { TInventoryEntryDraft } from '../../../types';
import skuL890Op2015Eu from './sku-l890-op-2015-eu';

describe(`with skuL890Op2015Eu preset and eu-warehouse channel`, () => {
  it(`should return a skuL890Op2015Eu preset`, () => {
    const skuL890Op2015EuPreset =
      skuL890Op2015Eu().build<TInventoryEntryDraft>();
    expect(skuL890Op2015EuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuL890Op2015Eu preset when built for graphql`, () => {
    const skuL890Op2015EuPresetGraphql =
      skuL890Op2015Eu().buildGraphql<TInventoryEntryDraft>();
    expect(skuL890Op2015EuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "l890-op-2015-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "l890-op-2015",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
