import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuVc01 preset`, () => {
  it(`should return a skuVc01 preset when built for rest`, () => {
    const skuVc01Preset = InventoryEntryDraftRest.presets.skuVc01().build();
    expect(skuVc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuVc01 preset when built for graphql`, () => {
    const skuVc01Preset = InventoryEntryDraftGraphql.presets.skuVc01().build();
    expect(skuVc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuVc01 preset when built for legacy rest`, () => {
    const skuVc01Preset = InventoryEntryDraft.presets
      .skuVc01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuVc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuVc01 preset when built for legacy graphql`, () => {
    const skuVc01Preset = InventoryEntryDraft.presets
      .skuVc01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuVc01Preset).toMatchInlineSnapshot();
  });
});
