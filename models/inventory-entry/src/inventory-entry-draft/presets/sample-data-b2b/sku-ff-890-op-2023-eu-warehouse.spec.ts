import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuFf890Op2023EuWarehouse preset`, () => {
  it(`should return a skuFf890Op2023EuWarehouse preset when built for rest`, () => {
    const skuFf890Op2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuFf890Op2023EuWarehouse()
      .build();
    expect(skuFf890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023EuWarehouse preset when built for graphql`, () => {
    const skuFf890Op2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuFf890Op2023EuWarehouse()
      .build();
    expect(skuFf890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023EuWarehouse preset when built for legacy rest`, () => {
    const skuFf890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuFf890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuFf890Op2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuFf890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuFf890Op2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuFf890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
