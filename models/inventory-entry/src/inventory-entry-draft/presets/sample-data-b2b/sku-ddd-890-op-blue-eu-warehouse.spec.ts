import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuDdd890OpBlueEuWarehouse preset`, () => {
  it(`should return a skuDdd890OpBlueEuWarehouse preset when built for rest`, () => {
    const skuDdd890OpBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuDdd890OpBlueEuWarehouse()
      .build();
    expect(skuDdd890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueEuWarehouse preset when built for graphql`, () => {
    const skuDdd890OpBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuDdd890OpBlueEuWarehouse()
      .build();
    expect(skuDdd890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuDdd890OpBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuDdd890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuDdd890OpBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuDdd890OpBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuDdd890OpBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuDdd890OpBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
