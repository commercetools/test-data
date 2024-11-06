import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAaa789UvRedDefaultWarehouse preset`, () => {
  it(`should return a skuAaa789UvRedDefaultWarehouse preset when built for rest`, () => {
    const skuAaa789UvRedDefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuAaa789UvRedDefaultWarehouse()
      .build();
    expect(skuAaa789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedDefaultWarehouse preset when built for graphql`, () => {
    const skuAaa789UvRedDefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuAaa789UvRedDefaultWarehouse()
        .build();
    expect(skuAaa789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedDefaultWarehouse preset when built for legacy rest`, () => {
    const skuAaa789UvRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvRedDefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAaa789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAaa789UvRedDefaultWarehouse preset when built for legacy graphql`, () => {
    const skuAaa789UvRedDefaultWarehousePreset = InventoryEntryDraft.presets
      .skuAaa789UvRedDefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAaa789UvRedDefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
