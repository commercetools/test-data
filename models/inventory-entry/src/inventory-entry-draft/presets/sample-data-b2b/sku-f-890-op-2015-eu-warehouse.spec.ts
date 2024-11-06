import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuF890Op2015EuWarehouse preset`, () => {
  it(`should return a skuF890Op2015EuWarehouse preset when built for rest`, () => {
    const skuF890Op2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuF890Op2015EuWarehouse()
      .build();
    expect(skuF890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015EuWarehouse preset when built for graphql`, () => {
    const skuF890Op2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuF890Op2015EuWarehouse()
      .build();
    expect(skuF890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015EuWarehouse preset when built for legacy rest`, () => {
    const skuF890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuF890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuF890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuF890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
