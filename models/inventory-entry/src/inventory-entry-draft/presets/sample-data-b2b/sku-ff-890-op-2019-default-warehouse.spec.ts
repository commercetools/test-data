import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFf890Op2019DefaultWarehouse preset`, () => {
  it(`should return a skuFf890Op2019DefaultWarehouse preset when built for rest`, () => {
    const skuFf890Op2019DefaultWarehousePreset = InventoryEntryDraftRest.presets
      .skuFf890Op2019DefaultWarehouse()
      .build();
    expect(skuFf890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2019DefaultWarehouse preset when built for graphql`, () => {
    const skuFf890Op2019DefaultWarehousePreset =
      InventoryEntryDraftGraphql.presets
        .skuFf890Op2019DefaultWarehouse()
        .build();
    expect(skuFf890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2019DefaultWarehouse preset when built for legacy rest`, () => {
    const skuFf890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2019DefaultWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFf890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2019DefaultWarehouse preset when built for legacy graphql`, () => {
    const skuFf890Op2019DefaultWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2019DefaultWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFf890Op2019DefaultWarehousePreset).toMatchInlineSnapshot();
  });
});
