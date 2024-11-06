import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuZ890Op2015EuWarehouse preset`, () => {
  it(`should return a skuZ890Op2015EuWarehouse preset when built for rest`, () => {
    const skuZ890Op2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuZ890Op2015EuWarehouse()
      .build();
    expect(skuZ890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015EuWarehouse preset when built for graphql`, () => {
    const skuZ890Op2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuZ890Op2015EuWarehouse()
      .build();
    expect(skuZ890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015EuWarehouse preset when built for legacy rest`, () => {
    const skuZ890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuZ890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuZ890Op2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuZ890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuZ890Op2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuZ890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
