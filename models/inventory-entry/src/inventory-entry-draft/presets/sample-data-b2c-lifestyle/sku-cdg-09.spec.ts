import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuCdg09 preset`, () => {
  it(`should return a skuCdg09 preset when built for rest`, () => {
    const skuCdg09Preset = InventoryEntryDraftRest.presets.skuCdg09().build();
    expect(skuCdg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCdg09 preset when built for graphql`, () => {
    const skuCdg09Preset = InventoryEntryDraftGraphql.presets
      .skuCdg09()
      .build();
    expect(skuCdg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCdg09 preset when built for legacy rest`, () => {
    const skuCdg09Preset = InventoryEntryDraft.presets
      .skuCdg09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuCdg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuCdg09 preset when built for legacy graphql`, () => {
    const skuCdg09Preset = InventoryEntryDraft.presets
      .skuCdg09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuCdg09Preset).toMatchInlineSnapshot();
  });
});
