
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuISP01 from './sku-ISP01';

describe('With skuISP01 preset', () => {
    it('should return skuISP01 preset', () => {
        const skuISP01Preset = skuISP01().build<TInventoryEntryDraft>();
        expect(skuISP01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuISP01 preset when built for GraphQL', () => {
        const skuISP01PresetGraphql = skuISP01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuISP01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


