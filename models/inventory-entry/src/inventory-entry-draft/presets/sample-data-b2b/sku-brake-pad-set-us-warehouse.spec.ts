import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBrakePadSetUsWarehouse preset`, () => {
  it(`should return a skuBrakePadSetUsWarehouse preset when built for rest`, () => {
    const skuBrakePadSetUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuBrakePadSetUsWarehouse()
      .build();
    expect(skuBrakePadSetUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetUsWarehouse preset when built for graphql`, () => {
    const skuBrakePadSetUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuBrakePadSetUsWarehouse()
      .build();
    expect(skuBrakePadSetUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetUsWarehouse preset when built for legacy rest`, () => {
    const skuBrakePadSetUsWarehousePreset = InventoryEntryDraft.presets
      .skuBrakePadSetUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBrakePadSetUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuBrakePadSetUsWarehouse preset when built for legacy graphql`, () => {
    const skuBrakePadSetUsWarehousePreset = InventoryEntryDraft.presets
      .skuBrakePadSetUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBrakePadSetUsWarehousePreset).toMatchInlineSnapshot();
  });
});
