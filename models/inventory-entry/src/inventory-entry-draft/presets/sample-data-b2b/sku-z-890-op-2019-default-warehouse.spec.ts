import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZ890Op2019DefaultWarehouse preset`, () => {
  it(`should return a skuZ890Op2019DefaultWarehouse preset when built for rest`, () => {
    const skuZ890Op2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuZ890Op2019DefaultWarehouse()
      .build();
    expect(skuZ890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019DefaultWarehouse preset when built for graphql`, () => {
    const skuZ890Op2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuZ890Op2019DefaultWarehouse()
        .build();
    expect(skuZ890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuZ890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZ890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuZ890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZ890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
