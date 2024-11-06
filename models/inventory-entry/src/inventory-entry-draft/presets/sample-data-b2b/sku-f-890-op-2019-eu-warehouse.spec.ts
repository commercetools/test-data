import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuF890Op2019EuWarehouse preset`, () => {
  it(`should return a skuF890Op2019EuWarehouse preset when built for rest`, () => {
    const skuF890Op2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuF890Op2019EuWarehouse()
      .build();
    expect(skuF890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2019EuWarehouse preset when built for graphql`, () => {
    const skuF890Op2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuF890Op2019EuWarehouse()
      .build();
    expect(skuF890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2019EuWarehouse preset when built for legacy rest`, () => {
    const skuF890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuF890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuF890Op2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuF890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuF890Op2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuF890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
