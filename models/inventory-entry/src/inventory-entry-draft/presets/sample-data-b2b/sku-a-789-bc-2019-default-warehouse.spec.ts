import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2019DefaultWarehouse preset`, () => {
  it(`should return a skuA789Bc2019DefaultWarehouse preset when built for rest`, () => {
    const skuA789Bc2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2019DefaultWarehouse()
      .build();
    expect(skuA789Bc2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019DefaultWarehouse preset when built for graphql`, () => {
    const skuA789Bc2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuA789Bc2019DefaultWarehouse()
        .build();
    expect(skuA789Bc2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
