import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2015DefaultWarehouse preset`, () => {
  it(`should return a skuLl890Op2015DefaultWarehouse preset when built for rest`, () => {
    const skuLl890Op2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2015DefaultWarehouse()
      .build();
    expect(skuLl890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015DefaultWarehouse preset when built for graphql`, () => {
    const skuLl890Op2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuLl890Op2015DefaultWarehouse()
        .build();
    expect(skuLl890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
