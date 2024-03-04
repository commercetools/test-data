import type { TInventoryEntryDraft } from '../../../types';
import skuBrakePadSetUs from './sku-brake-pad-set-us';

describe(`with skuBrakePadSetUs preset and us-warehouse channel`, () => {
  it(`should return a skuBrakePadSetUs preset`, () => {
    const skuBrakePadSetUsPreset =
      skuBrakePadSetUs().build<TInventoryEntryDraft>();
    expect(skuBrakePadSetUsPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetUs preset when built for graphql`, () => {
    const skuBrakePadSetUsPresetGraphql =
      skuBrakePadSetUs().buildGraphql<TInventoryEntryDraft>();
    expect(skuBrakePadSetUsPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-us-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "us-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
