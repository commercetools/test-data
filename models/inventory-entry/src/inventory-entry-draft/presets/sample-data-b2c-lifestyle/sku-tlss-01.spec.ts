import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuTlss01 preset`, () => {
  it(`should return a skuTlss01 preset when built for rest`, () => {
    const skuTlss01Preset = InventoryEntryDraftRest.presets.skuTlss01().build();
    expect(skuTlss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTlss01 preset when built for graphql`, () => {
    const skuTlss01Preset = InventoryEntryDraftGraphql.presets
      .skuTlss01()
      .build();
    expect(skuTlss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTlss01 preset when built for legacy rest`, () => {
    const skuTlss01Preset = InventoryEntryDraft.presets
      .skuTlss01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuTlss01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuTlss01 preset when built for legacy graphql`, () => {
    const skuTlss01Preset = InventoryEntryDraft.presets
      .skuTlss01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuTlss01Preset).toMatchInlineSnapshot();
  });
});
