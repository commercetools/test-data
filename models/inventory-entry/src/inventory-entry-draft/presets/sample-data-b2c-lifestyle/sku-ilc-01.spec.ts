import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuIlc01 preset`, () => {
  it(`should return a skuIlc01 preset when built for rest`, () => {
    const skuIlc01Preset = InventoryEntryDraftRest.presets.skuIlc01().build();
    expect(skuIlc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIlc01 preset when built for graphql`, () => {
    const skuIlc01Preset = InventoryEntryDraftGraphql.presets
      .skuIlc01()
      .build();
    expect(skuIlc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIlc01 preset when built for legacy rest`, () => {
    const skuIlc01Preset = InventoryEntryDraft.presets
      .skuIlc01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuIlc01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuIlc01 preset when built for legacy graphql`, () => {
    const skuIlc01Preset = InventoryEntryDraft.presets
      .skuIlc01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuIlc01Preset).toMatchInlineSnapshot();
  });
});
