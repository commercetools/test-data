import type { TInventoryEntryDraft } from '../../../types';
import skuBrakePadSetDefault from './sku-brake-pad-set-default';

describe(`with skuBrakePadSetDefault preset and default-warehouse channel`, () => {
  it(`should return a skuBrakePadSetDefault preset`, () => {
    const skuBrakePadSetDefaultPreset =
      skuBrakePadSetDefault().build<TInventoryEntryDraft>();
    expect(skuBrakePadSetDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetDefault preset when built for graphql`, () => {
    const skuBrakePadSetDefaultPresetGraphql =
      skuBrakePadSetDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuBrakePadSetDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
