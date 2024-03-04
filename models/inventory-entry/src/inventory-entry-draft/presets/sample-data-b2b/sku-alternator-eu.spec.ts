import type { TInventoryEntryDraft } from '../../../types';
import skuAlternatorEu from './sku-alternator-eu';

describe(`with skuAlternatorEu preset and eu-warehouse channel`, () => {
  it(`should return a skuAlternatorEu preset`, () => {
    const skuAlternatorEuPreset =
      skuAlternatorEu().build<TInventoryEntryDraft>();
    expect(skuAlternatorEuPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAlternatorEu preset when built for graphql`, () => {
    const skuAlternatorEuPresetGraphql =
      skuAlternatorEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuAlternatorEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": undefined,
      }
    `);
  });
});
