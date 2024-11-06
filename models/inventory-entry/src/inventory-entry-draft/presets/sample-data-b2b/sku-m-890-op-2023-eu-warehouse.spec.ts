import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuM890Op2023EuWarehouse preset`, () => {
  it(`should return a skuM890Op2023EuWarehouse preset when built for rest`, () => {
    const skuM890Op2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuM890Op2023EuWarehouse()
      .build();
    expect(skuM890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023EuWarehouse preset when built for graphql`, () => {
    const skuM890Op2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuM890Op2023EuWarehouse()
      .build();
    expect(skuM890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023EuWarehouse preset when built for legacy rest`, () => {
    const skuM890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuM890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuM890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuM890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
