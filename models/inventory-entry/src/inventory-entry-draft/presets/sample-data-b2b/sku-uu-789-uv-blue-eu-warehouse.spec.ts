import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuUu789UvBlueEuWarehouse preset`, () => {
  it(`should return a skuUu789UvBlueEuWarehouse preset when built for rest`, () => {
    const skuUu789UvBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuUu789UvBlueEuWarehouse()
      .build();
    expect(skuUu789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueEuWarehouse preset when built for graphql`, () => {
    const skuUu789UvBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuUu789UvBlueEuWarehouse()
      .build();
    expect(skuUu789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuUu789UvBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuUu789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuUu789UvBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuUu789UvBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuUu789UvBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuUu789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
