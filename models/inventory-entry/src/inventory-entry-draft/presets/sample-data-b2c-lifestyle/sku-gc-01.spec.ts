import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuGc01 preset`, () => {
  it(`should return a skuGc01 preset when built for rest`, () => {
    const skuGc01Preset = InventoryEntryDraftRest.presets.skuGc01().build();
    expect(skuGc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGc01 preset when built for graphql`, () => {
    const skuGc01Preset = InventoryEntryDraftGraphql.presets.skuGc01().build();
    expect(skuGc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGc01 preset when built for legacy rest`, () => {
    const skuGc01Preset = InventoryEntryDraft.presets
      .skuGc01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuGc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuGc01 preset when built for legacy graphql`, () => {
    const skuGc01Preset = InventoryEntryDraft.presets
      .skuGc01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuGc01Preset).toMatchInlineSnapshot();
  });
});
