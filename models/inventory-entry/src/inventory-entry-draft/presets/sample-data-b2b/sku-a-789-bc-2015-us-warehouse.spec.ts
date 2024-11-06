import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuA789Bc2015UsWarehouse preset`, () => {
  it(`should return a skuA789Bc2015UsWarehouse preset when built for rest`, () => {
    const skuA789Bc2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuA789Bc2015UsWarehouse()
      .build();
    expect(skuA789Bc2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015UsWarehouse preset when built for graphql`, () => {
    const skuA789Bc2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuA789Bc2015UsWarehouse()
      .build();
    expect(skuA789Bc2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015UsWarehouse preset when built for legacy rest`, () => {
    const skuA789Bc2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuA789Bc2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuA789Bc2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuA789Bc2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuA789Bc2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuA789Bc2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
