import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2019UsWarehouse preset`, () => {
  it(`should return a skuLl890Op2019UsWarehouse preset when built for rest`, () => {
    const skuLl890Op2019UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2019UsWarehouse()
      .build();
    expect(skuLl890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019UsWarehouse preset when built for graphql`, () => {
    const skuLl890Op2019UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuLl890Op2019UsWarehouse()
      .build();
    expect(skuLl890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019UsWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2019UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2019UsWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2019UsWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2019UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2019UsWarehousePreset).toMatchInlineSnapshot();
  });
});
