import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFf890Op2015DefaultWarehouse preset`, () => {
  it(`should return a skuFf890Op2015DefaultWarehouse preset when built for rest`, () => {
    const skuFf890Op2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuFf890Op2015DefaultWarehouse()
      .build();
    expect(skuFf890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2015DefaultWarehouse preset when built for graphql`, () => {
    const skuFf890Op2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuFf890Op2015DefaultWarehouse()
        .build();
    expect(skuFf890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuFf890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFf890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuFf890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFf890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
