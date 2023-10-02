
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuBLP01 from './sku-BLP01';

describe('With skuBLP01 preset', () => {
    it('should return skuBLP01 preset', () => {
        const skuBLP01Preset = skuBLP01().build<TInventoryEntryDraft>();
        expect(skuBLP01Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuBLP01 preset when built for GraphQL', () => {
        const skuBLP01PresetGraphql = skuBLP01().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuBLP01PresetGraphql).toMatchInlineSnapshot(``);
    });
});


