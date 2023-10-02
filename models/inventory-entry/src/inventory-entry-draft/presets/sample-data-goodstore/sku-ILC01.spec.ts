
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuILC01 from './sku-ILC01';

describe('With skuILC01 preset', () => {
    it('should return skuILC01 preset', () => {
        const skuILC01Preset = skuILC01().build<TInventoryEntryDraft>();
        expect(skuILC01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuILC01 preset when built for GraphQL', () => {
        const skuILC01PresetGraphql = skuILC01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuILC01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


