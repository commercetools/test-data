import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLedWorkLightUsWarehouse preset`, () => {
  it(`should return a skuLedWorkLightUsWarehouse preset when built for rest`, () => {
    const skuLedWorkLightUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuLedWorkLightUsWarehouse()
      .build();
    expect(skuLedWorkLightUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightUsWarehouse preset when built for graphql`, () => {
    const skuLedWorkLightUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuLedWorkLightUsWarehouse()
      .build();
    expect(skuLedWorkLightUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightUsWarehouse preset when built for legacy rest`, () => {
    const skuLedWorkLightUsWarehousePreset = InventoryEntryDraft.presets
      .skuLedWorkLightUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLedWorkLightUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightUsWarehouse preset when built for legacy graphql`, () => {
    const skuLedWorkLightUsWarehousePreset = InventoryEntryDraft.presets
      .skuLedWorkLightUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLedWorkLightUsWarehousePreset).toMatchInlineSnapshot();
  });
});
