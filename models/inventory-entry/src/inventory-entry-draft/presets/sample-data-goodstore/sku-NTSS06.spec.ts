
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuNTSS06 from './sku-NTSS06';

describe('With skuNTSS06 preset', () => {
    it('should return skuNTSS06 preset', () => {
        const skuNTSS06Preset = skuNTSS06().build<TInventoryEntryDraft>();
        expect(skuNTSS06Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuNTSS06 preset when built for GraphQL', () => {
        const skuNTSS06PresetGraphql = skuNTSS06().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuNTSS06PresetGraphql).toMatchInlineSnapshot(``);
    });
});


