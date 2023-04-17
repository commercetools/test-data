import { AttributeDefinitionDraft } from '@commercetools-test-data/attribute-definition';
import * as AttributeType from '@commercetools-test-data/attribute-type';
import { LocalizedString } from '@commercetools-test-data/commons';
import * as ProductTypeDraft from '../..';
import { TProductTypeDraftBuilder } from '../../../types';

const jackets = (): TProductTypeDraftBuilder =>
  ProductTypeDraft.presets
    .empty()
    .key('jackets')
    .name('Jackets')
    .description('Jackets')
    .attributes([
      AttributeDefinitionDraft.presets
        .empty()
        .name('sleeve_length')
        .label(LocalizedString.presets.empty()['en-US']('sleeve_length'))
        .inputTip(LocalizedString.presets.empty()['en-US']('sleeve_length'))
        .isRequired(false)
        .type(
          AttributeType.presets.enumType().values([
            {
              key: 'Crop',
              label: 'Crop',
            },
            {
              key: 'Normal',
              label: 'Normal',
            },
            {
              key: 'Extra Long',
              label: 'Extra Long',
            },
          ])
        )
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
      AttributeDefinitionDraft.presets
        .empty()
        .name('cotton')
        .label(LocalizedString.presets.empty()['en-US']('cotton'))
        .inputTip(LocalizedString.presets.empty()['en-US']('cotton'))
        .isRequired(false)
        // @ts-ignore
        .type(AttributeType.random().name('boolean'))
        .attributeConstraint('None')
        .isSearchable(false)
        .inputHint('SingleLine'),
    ]);

export default jackets;
