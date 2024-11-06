import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFf890Op2015EuWarehouse preset`, () => {
  it(`should return a skuFf890Op2015EuWarehouse preset when built for rest`, () => {
    const skuFf890Op2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuFf890Op2015EuWarehouse()
      .build();
    expect(skuFf890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2015EuWarehouse preset when built for graphql`, () => {
    const skuFf890Op2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFf890Op2015EuWarehouse()
      .build();
    expect(skuFf890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2015EuWarehouse preset when built for legacy rest`, () => {
    const skuFf890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFf890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuFf890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFf890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
