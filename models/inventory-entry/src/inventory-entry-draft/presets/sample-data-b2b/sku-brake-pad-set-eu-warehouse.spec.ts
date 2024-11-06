import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBrakePadSetEuWarehouse preset`, () => {
  it(`should return a skuBrakePadSetEuWarehouse preset when built for rest`, () => {
    const skuBrakePadSetEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuBrakePadSetEuWarehouse()
      .build();
    expect(skuBrakePadSetEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetEuWarehouse preset when built for graphql`, () => {
    const skuBrakePadSetEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBrakePadSetEuWarehouse()
      .build();
    expect(skuBrakePadSetEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetEuWarehouse preset when built for legacy rest`, () => {
    const skuBrakePadSetEuWarehousePreset = InventoryEntryDraft.presets
      .skuBrakePadSetEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBrakePadSetEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetEuWarehouse preset when built for legacy graphql`, () => {
    const skuBrakePadSetEuWarehousePreset = InventoryEntryDraft.presets
      .skuBrakePadSetEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBrakePadSetEuWarehousePreset).toMatchInlineSnapshot();
  });
});
