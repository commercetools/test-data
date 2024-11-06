import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuL890Op2023EuWarehouse preset`, () => {
  it(`should return a skuL890Op2023EuWarehouse preset when built for rest`, () => {
    const skuL890Op2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuL890Op2023EuWarehouse()
      .build();
    expect(skuL890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2023EuWarehouse preset when built for graphql`, () => {
    const skuL890Op2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuL890Op2023EuWarehouse()
      .build();
    expect(skuL890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2023EuWarehouse preset when built for legacy rest`, () => {
    const skuL890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuL890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuL890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuL890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
