import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2023EuWarehouse preset`, () => {
  it(`should return a skuLl890Op2023EuWarehouse preset when built for rest`, () => {
    const skuLl890Op2023EuWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2023EuWarehouse()
      .build();
    expect(skuLl890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023EuWarehouse preset when built for graphql`, () => {
    const skuLl890Op2023EuWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuLl890Op2023EuWarehouse()
      .build();
    expect(skuLl890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023EuWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2023EuWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2023EuWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2023EuWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2023EuWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2023EuWarehousePreset).toMatchInlineSnapshot();
  });
});
