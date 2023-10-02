
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCTSS0983 from './sku-CTSS0983';

describe('With skuCTSS0983 preset', () => {
    it('should return skuCTSS0983 preset', () => {
        const skuCTSS0983Preset = skuCTSS0983().build<TInventoryEntryDraft>();
        expect(skuCTSS0983Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCTSS0983 preset when built for GraphQL', () => {
        const skuCTSS0983PresetGraphql = skuCTSS0983().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCTSS0983PresetGraphql).toMatchInlineSnapshot(``);
    });
});


