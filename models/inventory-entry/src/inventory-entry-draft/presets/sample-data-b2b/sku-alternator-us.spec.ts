import type { TInventoryEntryDraft } from '../../../types';
import skuAlternatorUs from './sku-alternator-us';

describe(`with skuAlternatorUs preset and us-warehouse channel`, () => {
  it(`should return a skuAlternatorUs preset`, () => {
    const skuAlternatorUsPreset =
      skuAlternatorUs().build<TInventoryEntryDraft>();
    expect(skuAlternatorUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuAlternatorUs preset when built for graphql`, () => {
    const skuAlternatorUsPresetGraphql =
      skuAlternatorUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuAlternatorUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
