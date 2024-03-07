import type { TInventoryEntryDraft } from '../../../types';
import skuStarterMotorDefault from './sku-starter-motor-default';

describe(`with skuStarterMotorDefault preset and default-warehouse channel`, () => {
  it(`should return a skuStarterMotorDefault preset`, () => {
    const skuStarterMotorDefaultPreset =
      skuStarterMotorDefault().build<TInventoryEntryDraft>();
    expect(skuStarterMotorDefaultPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });

  it(`should return a skuStarterMotorDefault preset when built for graphql`, () => {
    const skuStarterMotorDefaultPresetGraphql =
      skuStarterMotorDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuStarterMotorDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
      }
    `);
  });
});
