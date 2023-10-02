
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuMB0973 from './sku-MB0973';

describe('With skuMB0973 preset', () => {
    it('should return skuMB0973 preset', () => {
        const skuMB0973Preset = skuMB0973().build<TInventoryEntryDraft>();
        expect(skuMB0973Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuMB0973 preset when built for GraphQL', () => {
        const skuMB0973PresetGraphql = skuMB0973().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuMB0973PresetGraphql).toMatchInlineSnapshot(``);
    });
});


