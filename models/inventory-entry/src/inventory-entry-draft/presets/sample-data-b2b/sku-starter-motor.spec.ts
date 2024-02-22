import type { TInventoryEntryDraft } from '../../../types';
import skuStarterMotor from './sku-starter-motor';

describe(`with skuStarterMotor preset`, () => {
  it(`should return a skuStarterMotor preset`, () => {
    const skuStarterMotorPreset =
      skuStarterMotor().build<TInventoryEntryDraft>();
    expect(skuStarterMotorPreset).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": undefined,
      }
    `);
  });

  it(`should return a skuStarterMotor preset when built for graphql`, () => {
    const skuStarterMotorPresetGraphql =
      skuStarterMotor().buildGraphql<TInventoryEntryDraft>();
    expect(skuStarterMotorPresetGraphql).toMatchInlineSnapshot(`
      {
        "custom": null,
        "expectedDelivery": undefined,
        "key": undefined,
        "quantityOnStock": 1000,
        "restockableInDays": undefined,
        "sku": "starter-motor",
        "supplyChannel": undefined,
      }
    `);
  });
});
