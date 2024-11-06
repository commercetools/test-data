import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2015DefaultWarehouse preset`, () => {
  it(`should return a skuA789Bc2015DefaultWarehouse preset when built for rest`, () => {
    const skuA789Bc2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2015DefaultWarehouse()
      .build();
    expect(skuA789Bc2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015DefaultWarehouse preset when built for graphql`, () => {
    const skuA789Bc2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuA789Bc2015DefaultWarehouse()
        .build();
    expect(skuA789Bc2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
