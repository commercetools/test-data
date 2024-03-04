import type { TInventoryEntryDraft } from '../../../types';
import skuStarterMotorDefault from './sku-starter-motor-default';

describe(`with skuStarterMotorDefault preset and default-warehouse channel`, () => {
  it(`should return a skuStarterMotorDefault preset`, () => {
    const skuStarterMotorDefaultPreset =
      skuStarterMotorDefault().build<TInventoryEntryDraft>();
    expect(skuStarterMotorDefaultPreset).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStarterMotorDefault preset when built for graphql`, () => {
    const skuStarterMotorDefaultPresetGraphql =
      skuStarterMotorDefault().buildGraphql<TInventoryEntryDraft>();
    expect(skuStarterMotorDefaultPresetGraphql).toMatchInlineSnapshot(`
      {
        "channel": {
          "key": "default-warehouse",
          "typeId": "channel",
        },
        "custom": null,
        "expectedDelivery": undefined,
        "key": "starter-motor-default-warehouse",
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": undefined,
      }
    `);
  });
});
