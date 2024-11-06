import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAlternatorEuWarehouse preset`, () => {
  it(`should return a skuAlternatorEuWarehouse preset when built for rest`, () => {
    const skuAlternatorEuWarehousePreset = InventoryEntryDraftRest.presets
      .skuAlternatorEuWarehouse()
      .build();
    expect(skuAlternatorEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorEuWarehouse preset when built for graphql`, () => {
    const skuAlternatorEuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuAlternatorEuWarehouse()
      .build();
    expect(skuAlternatorEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorEuWarehouse preset when built for legacy rest`, () => {
    const skuAlternatorEuWarehousePreset = InventoryEntryDraft.presets
      .skuAlternatorEuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAlternatorEuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlternatorEuWarehouse preset when built for legacy graphql`, () => {
    const skuAlternatorEuWarehousePreset = InventoryEntryDraft.presets
      .skuAlternatorEuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAlternatorEuWarehousePreset).toMatchInlineSnapshot();
  });
});
