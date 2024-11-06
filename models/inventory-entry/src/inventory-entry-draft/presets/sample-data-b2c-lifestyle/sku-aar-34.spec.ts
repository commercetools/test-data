import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuAar34 preset`, () => {
  it(`should return a skuAar34 preset when built for rest`, () => {
    const skuAar34Preset = InventoryEntryDraftRest.presets.skuAar34().build();
    expect(skuAar34Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAar34 preset when built for graphql`, () => {
    const skuAar34Preset = InventoryEntryDraftGraphql.presets
      .skuAar34()
      .build();
    expect(skuAar34Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAar34 preset when built for legacy rest`, () => {
    const skuAar34Preset = InventoryEntryDraft.presets
      .skuAar34()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuAar34Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuAar34 preset when built for legacy graphql`, () => {
    const skuAar34Preset = InventoryEntryDraft.presets
      .skuAar34()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuAar34Preset).toMatchInlineSnapshot();
  });
});
