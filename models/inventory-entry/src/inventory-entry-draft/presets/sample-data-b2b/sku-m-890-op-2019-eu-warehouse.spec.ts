import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuM890Op2019EuWarehouse preset`, () => {
  it(`should return a skuM890Op2019EuWarehouse preset when built for rest`, () => {
    const skuM890Op2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuM890Op2019EuWarehouse()
      .build();
    expect(skuM890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019EuWarehouse preset when built for graphql`, () => {
    const skuM890Op2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuM890Op2019EuWarehouse()
      .build();
    expect(skuM890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019EuWarehouse preset when built for legacy rest`, () => {
    const skuM890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuM890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuM890Op2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuM890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuM890Op2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuM890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
