import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuL890Op2015DefaultWarehouse preset`, () => {
  it(`should return a skuL890Op2015DefaultWarehouse preset when built for rest`, () => {
    const skuL890Op2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuL890Op2015DefaultWarehouse()
      .build();
    expect(skuL890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015DefaultWarehouse preset when built for graphql`, () => {
    const skuL890Op2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuL890Op2015DefaultWarehouse()
        .build();
    expect(skuL890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuL890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuL890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuL890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuL890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
