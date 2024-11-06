import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2015EuWarehouse preset`, () => {
  it(`should return a skuLl890Op2015EuWarehouse preset when built for rest`, () => {
    const skuLl890Op2015EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2015EuWarehouse()
      .build();
    expect(skuLl890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015EuWarehouse preset when built for graphql`, () => {
    const skuLl890Op2015EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuLl890Op2015EuWarehouse()
      .build();
    expect(skuLl890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015EuWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2015EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015EuWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2015EuWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2015EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2015EuWarehousePreset).toMatchInlineSnapshot();
  });
});
