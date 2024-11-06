import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2023DefaultWarehouse preset`, () => {
  it(`should return a skuA789Bc2023DefaultWarehouse preset when built for rest`, () => {
    const skuA789Bc2023DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2023DefaultWarehouse()
      .build();
    expect(skuA789Bc2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023DefaultWarehouse preset when built for graphql`, () => {
    const skuA789Bc2023DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuA789Bc2023DefaultWarehouse()
        .build();
    expect(skuA789Bc2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023DefaultWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2023DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2023DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2023DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2023DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
