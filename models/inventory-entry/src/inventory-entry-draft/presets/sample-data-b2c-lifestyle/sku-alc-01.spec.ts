import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAlc01 preset`, () => {
  it(`should return a skuAlc01 preset when built for rest`, () => {
    const skuAlc01Preset = InventoryEntryDraftRest.presets.skuAlc01().build();
    expect(skuAlc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlc01 preset when built for graphql`, () => {
    const skuAlc01Preset = InventoryEntryDraftGraphql.presets
      .skuAlc01()
      .build();
    expect(skuAlc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlc01 preset when built for legacy rest`, () => {
    const skuAlc01Preset = InventoryEntryDraft.presets
      .skuAlc01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAlc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAlc01 preset when built for legacy graphql`, () => {
    const skuAlc01Preset = InventoryEntryDraft.presets
      .skuAlc01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAlc01Preset).toMatchInlineSnapshot();
  });
});
