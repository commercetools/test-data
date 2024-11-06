import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuJjj890OpBlueEuWarehouse preset`, () => {
  it(`should return a skuJjj890OpBlueEuWarehouse preset when built for rest`, () => {
    const skuJjj890OpBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuJjj890OpBlueEuWarehouse()
      .build();
    expect(skuJjj890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueEuWarehouse preset when built for graphql`, () => {
    const skuJjj890OpBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuJjj890OpBlueEuWarehouse()
      .build();
    expect(skuJjj890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuJjj890OpBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuJjj890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuJjj890OpBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuJjj890OpBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuJjj890OpBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuJjj890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
