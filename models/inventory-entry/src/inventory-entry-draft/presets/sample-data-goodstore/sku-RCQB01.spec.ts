
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuRCQB01 from './sku-RCQB01';

describe('With skuRCQB01 preset', () => {
    it('should return skuRCQB01 preset', () => {
        const skuRCQB01Preset = skuRCQB01().build<TInventoryEntryDraft>();
        expect(skuRCQB01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuRCQB01 preset when built for GraphQL', () => {
        const skuRCQB01PresetGraphql = skuRCQB01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuRCQB01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


