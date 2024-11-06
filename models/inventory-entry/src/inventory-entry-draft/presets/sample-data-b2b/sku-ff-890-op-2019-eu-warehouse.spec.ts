import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFf890Op2019EuWarehouse preset`, () => {
  it(`should return a skuFf890Op2019EuWarehouse preset when built for rest`, () => {
    const skuFf890Op2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuFf890Op2019EuWarehouse()
      .build();
    expect(skuFf890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2019EuWarehouse preset when built for graphql`, () => {
    const skuFf890Op2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFf890Op2019EuWarehouse()
      .build();
    expect(skuFf890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2019EuWarehouse preset when built for legacy rest`, () => {
    const skuFf890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFf890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuFf890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFf890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
