import type {
  TInventoryEntryDraftGraphql,
  TInventoryEntryDraftRest,
} from '../../../types';
import {
  InventoryEntryDraft,
  InventoryEntryDraftGraphql,
  InventoryEntryDraftRest,
} from '../../index';

describe(`with skuHp01 preset`, () => {
  it(`should return a skuHp01 preset when built for rest`, () => {
    const skuHp01Preset = InventoryEntryDraftRest.presets.skuHp01().build();
    expect(skuHp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuHp01 preset when built for graphql`, () => {
    const skuHp01Preset = InventoryEntryDraftGraphql.presets.skuHp01().build();
    expect(skuHp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuHp01 preset when built for legacy rest`, () => {
    const skuHp01Preset = InventoryEntryDraft.presets
      .skuHp01()
      .buildRest<TInventoryEntryDraftRest>();
    expect(skuHp01Preset).toMatchInlineSnapshot();
  });

  it(`should return a skuHp01 preset when built for legacy graphql`, () => {
    const skuHp01Preset = InventoryEntryDraft.presets
      .skuHp01()
      .buildGraphql<TInventoryEntryDraftGraphql>();
    expect(skuHp01Preset).toMatchInlineSnapshot();
  });
});
