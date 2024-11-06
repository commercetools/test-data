import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIsp01 preset`, () => {
  it(`should return a skuIsp01 preset when built for rest`, () => {
    const skuIsp01Preset = InventoryEntryDraftRest.presets.skuIsp01().build();
    expect(skuIsp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIsp01 preset when built for graphql`, () => {
    const skuIsp01Preset = InventoryEntryDraftGraphql.presets
      .skuIsp01()
      .build();
    expect(skuIsp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIsp01 preset when built for legacy rest`, () => {
    const skuIsp01Preset = InventoryEntryDraft.presets
      .skuIsp01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIsp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIsp01 preset when built for legacy graphql`, () => {
    const skuIsp01Preset = InventoryEntryDraft.presets
      .skuIsp01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIsp01Preset).toMatchInlineSnapshot();
  });
});
