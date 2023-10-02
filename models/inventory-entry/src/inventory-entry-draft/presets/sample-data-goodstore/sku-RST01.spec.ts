
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuRST01 from './sku-RST01';

describe('With skuRST01 preset', () => {
    it('should return skuRST01 preset', () => {
        const skuRST01Preset = skuRST01().build<TInventoryEntryDraft>();
        expect(skuRST01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuRST01 preset when built for GraphQL', () => {
        const skuRST01PresetGraphql = skuRST01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuRST01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


