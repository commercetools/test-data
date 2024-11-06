import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuL890Op2019EuWarehouse preset`, () => {
  it(`should return a skuL890Op2019EuWarehouse preset when built for rest`, () => {
    const skuL890Op2019EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuL890Op2019EuWarehouse()
      .build();
    expect(skuL890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2019EuWarehouse preset when built for graphql`, () => {
    const skuL890Op2019EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuL890Op2019EuWarehouse()
      .build();
    expect(skuL890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2019EuWarehouse preset when built for legacy rest`, () => {
    const skuL890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2019EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuL890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuL890Op2019EuWarehouse preset when built for legacy graphql`, () => {
    const skuL890Op2019EuWarehousePreset = InventoryEntryDraft.presets
      .skuL890Op2019EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuL890Op2019EuWarehousePreset).toMatchInlineSnapshot();
  });
});
