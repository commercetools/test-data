import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuStarterMotorEuWarehouse preset`, () => {
  it(`should return a skuStarterMotorEuWarehouse preset when built for rest`, () => {
    const skuStarterMotorEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuStarterMotorEuWarehouse()
      .build();
    expect(skuStarterMotorEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorEuWarehouse preset when built for graphql`, () => {
    const skuStarterMotorEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuStarterMotorEuWarehouse()
      .build();
    expect(skuStarterMotorEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorEuWarehouse preset when built for legacy rest`, () => {
    const skuStarterMotorEuWarehousePreset = InventoryEntryDraft.presets
      .skuStarterMotorEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuStarterMotorEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuStarterMotorEuWarehouse preset when built for legacy graphql`, () => {
    const skuStarterMotorEuWarehousePreset = InventoryEntryDraft.presets
      .skuStarterMotorEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuStarterMotorEuWarehousePreset).toMatchInlineSnapshot();
  });
});
