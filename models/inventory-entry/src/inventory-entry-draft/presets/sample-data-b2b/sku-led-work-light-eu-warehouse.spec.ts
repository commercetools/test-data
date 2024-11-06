import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLedWorkLightEuWarehouse preset`, () => {
  it(`should return a skuLedWorkLightEuWarehouse preset when built for rest`, () => {
    const skuLedWorkLightEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuLedWorkLightEuWarehouse()
      .build();
    expect(skuLedWorkLightEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightEuWarehouse preset when built for graphql`, () => {
    const skuLedWorkLightEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuLedWorkLightEuWarehouse()
      .build();
    expect(skuLedWorkLightEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightEuWarehouse preset when built for legacy rest`, () => {
    const skuLedWorkLightEuWarehousePreset = InventoryEntryDraft.presets
      .skuLedWorkLightEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLedWorkLightEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightEuWarehouse preset when built for legacy graphql`, () => {
    const skuLedWorkLightEuWarehousePreset = InventoryEntryDraft.presets
      .skuLedWorkLightEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLedWorkLightEuWarehousePreset).toMatchInlineSnapshot();
  });
});
