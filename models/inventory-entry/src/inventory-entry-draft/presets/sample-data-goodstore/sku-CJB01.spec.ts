
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCJB01 from './sku-CJB01';

describe('With skuCJB01 preset', () => {
    it('should return skuCJB01 preset', () => {
        const skuCJB01Preset = skuCJB01().build<TInventoryEntryDraft>();
        expect(skuCJB01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCJB01 preset when built for GraphQL', () => {
        const skuCJB01PresetGraphql = skuCJB01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCJB01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


