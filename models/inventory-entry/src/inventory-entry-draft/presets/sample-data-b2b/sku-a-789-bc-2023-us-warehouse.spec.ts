import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2023UsWarehouse preset`, () => {
  it(`should return a skuA789Bc2023UsWarehouse preset when built for rest`, () => {
    const skuA789Bc2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2023UsWarehouse()
      .build();
    expect(skuA789Bc2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023UsWarehouse preset when built for graphql`, () => {
    const skuA789Bc2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuA789Bc2023UsWarehouse()
      .build();
    expect(skuA789Bc2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023UsWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
