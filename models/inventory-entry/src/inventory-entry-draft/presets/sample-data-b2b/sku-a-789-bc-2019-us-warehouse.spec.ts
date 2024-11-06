import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2019UsWarehouse preset`, () => {
  it(`should return a skuA789Bc2019UsWarehouse preset when built for rest`, () => {
    const skuA789Bc2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2019UsWarehouse()
      .build();
    expect(skuA789Bc2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019UsWarehouse preset when built for graphql`, () => {
    const skuA789Bc2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuA789Bc2019UsWarehouse()
      .build();
    expect(skuA789Bc2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019UsWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
