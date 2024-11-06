import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRcqb01 preset`, () => {
  it(`should return a skuRcqb01 preset when built for rest`, () => {
    const skuRcqb01Preset = InventoryEntryDraftRest.presets.skuRcqb01().build();
    expect(skuRcqb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcqb01 preset when built for graphql`, () => {
    const skuRcqb01Preset = InventoryEntryDraftGraphql.presets
      .skuRcqb01()
      .build();
    expect(skuRcqb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcqb01 preset when built for legacy rest`, () => {
    const skuRcqb01Preset = InventoryEntryDraft.presets
      .skuRcqb01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRcqb01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRcqb01 preset when built for legacy graphql`, () => {
    const skuRcqb01Preset = InventoryEntryDraft.presets
      .skuRcqb01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRcqb01Preset).toMatchInlineSnapshot();
  });
});
