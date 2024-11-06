import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuD234Wx2023UsWarehouse preset`, () => {
  it(`should return a skuD234Wx2023UsWarehouse preset when built for rest`, () => {
    const skuD234Wx2023UsWarehousePreset = InventoryEntryDraftRest.presets
      .skuD234Wx2023UsWarehouse()
      .build();
    expect(skuD234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2023UsWarehouse preset when built for graphql`, () => {
    const skuD234Wx2023UsWarehousePreset = InventoryEntryDraftGraphql.presets
      .skuD234Wx2023UsWarehouse()
      .build();
    expect(skuD234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2023UsWarehouse preset when built for legacy rest`, () => {
    const skuD234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2023UsWarehouse()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuD234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });

  it(`should return a skuD234Wx2023UsWarehouse preset when built for legacy graphql`, () => {
    const skuD234Wx2023UsWarehousePreset = InventoryEntryDraft.presets
      .skuD234Wx2023UsWarehouse()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuD234Wx2023UsWarehousePreset).toMatchInlineSnapshot();
  });
});
