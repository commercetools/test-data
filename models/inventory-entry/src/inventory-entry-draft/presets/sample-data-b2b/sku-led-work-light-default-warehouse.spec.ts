import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLedWorkLightDefaultWarehouse preset`, () => {
  it(`should return a skuLedWorkLightDefaultWarehouse preset when built for rest`, () => {
    const skuLedWorkLightDefaultWarehousePreset =
      InventoryEntryDraftRest.presets.skuLedWorkLightDefaultWarehouse().build();
    expect(skuLedWorkLightDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightDefaultWarehouse preset when built for graphql`, () => {
    const skuLedWorkLightDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuLedWorkLightDefaultWarehouse()
        .build();
    expect(skuLedWorkLightDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightDefaultWarehouse preset when built for legacy rest`, () => {
    const skuLedWorkLightDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuLedWorkLightDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLedWorkLightDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLedWorkLightDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuLedWorkLightDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuLedWorkLightDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLedWorkLightDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
