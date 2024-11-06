import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGgg789UvBlueEuWarehouse preset`, () => {
  it(`should return a skuGgg789UvBlueEuWarehouse preset when built for rest`, () => {
    const skuGgg789UvBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuGgg789UvBlueEuWarehouse()
      .build();
    expect(skuGgg789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueEuWarehouse preset when built for graphql`, () => {
    const skuGgg789UvBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuGgg789UvBlueEuWarehouse()
      .build();
    expect(skuGgg789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuGgg789UvBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGgg789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuGgg789UvBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuGgg789UvBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuGgg789UvBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGgg789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
