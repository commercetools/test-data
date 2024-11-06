import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvBlueUsWarehouse preset`, () => {
  it(`should return a skuAaa789UvBlueUsWarehouse preset when built for rest`, () => {
    const skuAaa789UvBlueUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuAaa789UvBlueUsWarehouse()
      .build();
    expect(skuAaa789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueUsWarehouse preset when built for graphql`, () => {
    const skuAaa789UvBlueUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAaa789UvBlueUsWarehouse()
      .build();
    expect(skuAaa789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueUsWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvBlueUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvBlueUsWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvBlueUsWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvBlueUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvBlueUsWarehousePreset).toMatchInlineSnapshot();
  });
});
