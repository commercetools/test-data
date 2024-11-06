import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuM890Op2015DefaultWarehouse preset`, () => {
  it(`should return a skuM890Op2015DefaultWarehouse preset when built for rest`, () => {
    const skuM890Op2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuM890Op2015DefaultWarehouse()
      .build();
    expect(skuM890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2015DefaultWarehouse preset when built for graphql`, () => {
    const skuM890Op2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuM890Op2015DefaultWarehouse()
        .build();
    expect(skuM890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuM890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuM890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuM890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuM890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
