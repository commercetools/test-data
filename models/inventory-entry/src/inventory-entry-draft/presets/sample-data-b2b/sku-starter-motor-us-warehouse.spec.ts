import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuStarterMotorUsWarehouse preset`, () => {
  it(`should return a skuStarterMotorUsWarehouse preset when built for rest`, () => {
    const skuStarterMotorUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuStarterMotorUsWarehouse()
      .build();
    expect(skuStarterMotorUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorUsWarehouse preset when built for graphql`, () => {
    const skuStarterMotorUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuStarterMotorUsWarehouse()
      .build();
    expect(skuStarterMotorUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorUsWarehouse preset when built for legacy rest`, () => {
    const skuStarterMotorUsWarehousePreset = InventoryEntryDraft.presets
      .skuStarterMotorUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuStarterMotorUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorUsWarehouse preset when built for legacy graphql`, () => {
    const skuStarterMotorUsWarehousePreset = InventoryEntryDraft.presets
      .skuStarterMotorUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuStarterMotorUsWarehousePreset).toMatchInlineSnapshot();
  });
});
