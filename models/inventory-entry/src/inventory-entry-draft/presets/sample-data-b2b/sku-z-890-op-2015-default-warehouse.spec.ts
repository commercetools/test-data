import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZ890Op2015DefaultWarehouse preset`, () => {
  it(`should return a skuZ890Op2015DefaultWarehouse preset when built for rest`, () => {
    const skuZ890Op2015DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuZ890Op2015DefaultWarehouse()
      .build();
    expect(skuZ890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015DefaultWarehouse preset when built for graphql`, () => {
    const skuZ890Op2015DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuZ890Op2015DefaultWarehouse()
        .build();
    expect(skuZ890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015DefaultWarehouse preset when built for legacy rest`, () => {
    const skuZ890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2015DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZ890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuZ890Op2015DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2015DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZ890Op2015DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
