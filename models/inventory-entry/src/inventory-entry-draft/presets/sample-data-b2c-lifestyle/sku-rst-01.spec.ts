import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuRst01 preset`, () => {
  it(`should return a skuRst01 preset when built for rest`, () => {
    const skuRst01Preset = InventoryEntryDraftRest.presets.skuRst01().build();
    expect(skuRst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRst01 preset when built for graphql`, () => {
    const skuRst01Preset = InventoryEntryDraftGraphql.presets
      .skuRst01()
      .build();
    expect(skuRst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRst01 preset when built for legacy rest`, () => {
    const skuRst01Preset = InventoryEntryDraft.presets
      .skuRst01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuRst01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuRst01 preset when built for legacy graphql`, () => {
    const skuRst01Preset = InventoryEntryDraft.presets
      .skuRst01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuRst01Preset).toMatchInlineSnapshot();
  });
});
