
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuALC01 from './sku-ALC01';

describe('With skuALC01 preset', () => {
    it('should return skuALC01 preset', () => {
        const skuALC01Preset = skuALC01().build<TInventoryEntryDraft>();
        expect(skuALC01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuALC01 preset when built for GraphQL', () => {
        const skuALC01PresetGraphql = skuALC01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuALC01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


