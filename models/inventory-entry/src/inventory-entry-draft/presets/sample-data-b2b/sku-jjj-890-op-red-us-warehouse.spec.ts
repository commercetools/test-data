import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpRedUsWarehouse preset`, () => {
  it(`should return a skuJjj890OpRedUsWarehouse preset when built for rest`, () => {
    const skuJjj890OpRedUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuJjj890OpRedUsWarehouse()
      .build();
    expect(skuJjj890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedUsWarehouse preset when built for graphql`, () => {
    const skuJjj890OpRedUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJjj890OpRedUsWarehouse()
      .build();
    expect(skuJjj890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedUsWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpRedUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpRedUsWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpRedUsWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpRedUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpRedUsWarehousePreset).toMatchInlineSnapshot();
  });
});
