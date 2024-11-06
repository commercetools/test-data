import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAlternatorUsWarehouse preset`, () => {
  it(`should return a skuAlternatorUsWarehouse preset when built for rest`, () => {
    const skuAlternatorUsWarehousePreset = InventoryEntryDraftRest.presets
      .skuAlternatorUsWarehouse()
      .build();
    expect(skuAlternatorUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorUsWarehouse preset when built for graphql`, () => {
    const skuAlternatorUsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAlternatorUsWarehouse()
      .build();
    expect(skuAlternatorUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorUsWarehouse preset when built for legacy rest`, () => {
    const skuAlternatorUsWarehousePreset = InventoryEntryDraft.presets
      .skuAlternatorUsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAlternatorUsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorUsWarehouse preset when built for legacy graphql`, () => {
    const skuAlternatorUsWarehousePreset = InventoryEntryDraft.presets
      .skuAlternatorUsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAlternatorUsWarehousePreset).toMatchInlineSnapshot();
  });
});
