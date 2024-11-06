import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuLl890Op2015UsWarehouse preset`, () => {
  it(`should return a skuLl890Op2015UsWarehouse preset when built for rest`, () => {
    const skuLl890Op2015UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuLl890Op2015UsWarehouse()
      .build();
    expect(skuLl890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015UsWarehouse preset when built for graphql`, () => {
    const skuLl890Op2015UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuLl890Op2015UsWarehouse()
      .build();
    expect(skuLl890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015UsWarehouse preset when built for legacy rest`, () => {
    const skuLl890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2015UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuLl890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuLl890Op2015UsWarehouse preset when built for legacy graphql`, () => {
    const skuLl890Op2015UsWarehousePreset = InventoryEntryDraft.presets
      .skuLl890Op2015UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuLl890Op2015UsWarehousePreset).toMatchInlineSnapshot();
  });
});
