import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuL890Op2015EuWarehouse preset`, () => {
  it(`should return a skuL890Op2015EuWarehouse preset when built for rest`, () => {
    const skuL890Op2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuL890Op2015EuWarehouse()
      .build();
    expect(skuL890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015EuWarehouse preset when built for graphql`, () => {
    const skuL890Op2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuL890Op2015EuWarehouse()
      .build();
    expect(skuL890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015EuWarehouse preset when built for legacy rest`, () => {
    const skuL890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuL890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuL890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuL890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
