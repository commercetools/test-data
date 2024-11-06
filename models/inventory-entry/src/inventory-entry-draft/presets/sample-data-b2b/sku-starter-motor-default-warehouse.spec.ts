import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuStarterMotorDefaultWarehouse preset`, () => {
  it(`should return a skuStarterMotorDefaultWarehouse preset when built for rest`, () => {
    const skuStarterMotorDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuStarterMotorDefaultWarehouse().build();
    expect(skuStarterMotorDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorDefaultWarehouse preset when built for graphql`, () => {
    const skuStarterMotorDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuStarterMotorDefaultWarehouse()
        .build();
    expect(skuStarterMotorDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorDefaultWarehouse preset when built for legacy rest`, () => {
    const skuStarterMotorDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuStarterMotorDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuStarterMotorDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuStarterMotorDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuStarterMotorDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuStarterMotorDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
