import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuBlp01 preset`, () => {
  it(`should return a skuBlp01 preset when built for rest`, () => {
    const skuBlp01Preset = InventoryEntryDraftRest.presets.skuBlp01().build();
    expect(skuBlp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBlp01 preset when built for graphql`, () => {
    const skuBlp01Preset = InventoryEntryDraftGraphql.presets
      .skuBlp01()
      .build();
    expect(skuBlp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBlp01 preset when built for legacy rest`, () => {
    const skuBlp01Preset = InventoryEntryDraft.presets
      .skuBlp01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuBlp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuBlp01 preset when built for legacy graphql`, () => {
    const skuBlp01Preset = InventoryEntryDraft.presets
      .skuBlp01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuBlp01Preset).toMatchInlineSnapshot();
  });
});
