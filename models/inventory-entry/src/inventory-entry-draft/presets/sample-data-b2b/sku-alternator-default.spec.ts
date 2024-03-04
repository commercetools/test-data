import type { TInventoryEntryDraft } from '../../../types';
import skuAlternatorDefault from './sku-alternator-default';

describe(`with skuAlternatorDefault preset and default-warehouse channel`, () => {
  it(`should return a skuAlternatorDefault preset`, () => {
    const skuAlternatorDefaultPreset =
      skuAlternatorDefault().build<TInventoryEntryDraft>();
    expect(skuAlternatorDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuAlternatorDefault preset when built for graphql`, () => {
    const skuAlternatorDefaultPresetGraphql =
      skuAlternatorDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuAlternatorDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "alternator-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "alternator",
        "supplyChannel": undefined,
      }
    `);
  });
});
