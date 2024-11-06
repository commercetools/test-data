import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuMuqb01 preset`, () => {
  it(`should return a skuMuqb01 preset when built for rest`, () => {
    const skuMuqb01Preset = InventoryEntryDraftRest.presets.skuMuqb01().build();
    expect(skuMuqb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMuqb01 preset when built for graphql`, () => {
    const skuMuqb01Preset = InventoryEntryDraftGraphql.presets
      .skuMuqb01()
      .build();
    expect(skuMuqb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMuqb01 preset when built for legacy rest`, () => {
    const skuMuqb01Preset = InventoryEntryDraft.presets
      .skuMuqb01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuMuqb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuMuqb01 preset when built for legacy graphql`, () => {
    const skuMuqb01Preset = InventoryEntryDraft.presets
      .skuMuqb01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuMuqb01Preset).toMatchInlineSnapshot();
  });
});
