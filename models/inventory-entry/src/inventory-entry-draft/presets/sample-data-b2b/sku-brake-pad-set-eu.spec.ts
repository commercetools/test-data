import type { TInventoryEntryDraft } from '../../../types';
import skuBrakePadSetEu from './sku-brake-pad-set-eu';

describe(`with skuBrakePadSetEu preset and eu-warehouse channel`, () => {
  it(`should return a skuBrakePadSetEu preset`, () => {
    const skuBrakePadSetEuPreset =
      skuBrakePadSetEu().build<TInventoryEntryDraft>();
    expect(skuBrakePadSetEuPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuBrakePadSetEu preset when built for graphql`, () => {
    const skuBrakePadSetEuPresetGraphql =
      skuBrakePadSetEu().buildGraphql<TInventoryEntryDraft>();
    expect(skuBrakePadSetEuPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "brake-pad-set-eu-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "brake-pad-set",
        "supplyChannel": {
          "key": "eu-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
