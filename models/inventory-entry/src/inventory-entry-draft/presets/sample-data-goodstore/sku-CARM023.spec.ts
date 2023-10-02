
import { TInventoryEntryDraft, TInventoryEntryDraftGraphql } from '../../../types';
import skuCARM023 from './sku-CARM023';

describe('With skuCARM023 preset', () => {
    it('should return skuCARM023 preset', () => {
        const skuCARM023Preset = skuCARM023().build<TInventoryEntryDraft>();
        expect(skuCARM023Preset).toMatchInlineSnapshot(``);
    });

    it('should return skuCARM023 preset when built for GraphQL', () => {
        const skuCARM023PresetGraphql = skuCARM023().buildGraphql<TInventoryEntryDraftGraphql>();
        expect(skuCARM023PresetGraphql).toMatchInlineSnapshot(``);
    });
});


