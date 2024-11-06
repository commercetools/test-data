import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuScg09 preset`, () => {
  it(`should return a skuScg09 preset when built for rest`, () => {
    const skuScg09Preset = InventoryEntryDraftRest.presets.skuScg09().build();
    expect(skuScg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuScg09 preset when built for graphql`, () => {
    const skuScg09Preset = InventoryEntryDraftGraphql.presets
      .skuScg09()
      .build();
    expect(skuScg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuScg09 preset when built for legacy rest`, () => {
    const skuScg09Preset = InventoryEntryDraft.presets
      .skuScg09()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuScg09Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuScg09 preset when built for legacy graphql`, () => {
    const skuScg09Preset = InventoryEntryDraft.presets
      .skuScg09()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuScg09Preset).toMatchInlineSnapshot();
  });
});
