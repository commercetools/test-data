
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuRWG09 from './sku-RWG09';

describe('With skuRWG09 preset', () => {
    it('should return skuRWG09 preset', () => {
        const skuRWG09Preset = skuRWG09().build<TInventoryEntryDraft>();
        expect(skuRWG09Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuRWG09 preset when built for GraphQL', () => {
        const skuRWG09PresetGraphql = skuRWG09().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuRWG09PresetGraphql).toMatchInlineSnapshot(``);
    });
});


