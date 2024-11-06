import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvBlueEuWarehouse preset`, () => {
  it(`should return a skuAaa789UvBlueEuWarehouse preset when built for rest`, () => {
    const skuAaa789UvBlueEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuAaa789UvBlueEuWarehouse()
      .build();
    expect(skuAaa789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueEuWarehouse preset when built for graphql`, () => {
    const skuAaa789UvBlueEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAaa789UvBlueEuWarehouse()
      .build();
    expect(skuAaa789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueEuWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvBlueEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueEuWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvBlueEuWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvBlueEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvBlueEuWarehousePreset).toMatchInlineSnapshot();
  });
});
