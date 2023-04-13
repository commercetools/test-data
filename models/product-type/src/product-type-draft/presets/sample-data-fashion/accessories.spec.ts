import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import accessories from './accessories';

describe(`with accessories preset`, () => {
  it(`should create an accesories product type draft`, () => {
    const accesoriesProductType = accessories().build<TProductTypeDraft>();
    expect(accesoriesProductType).toEqual(
      expect.objectContaining({
        key: 'accessories',
        name: 'Accessories',
        description: 'Accessories',
        attributeDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: 'type',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Type',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Type',
              fr: undefined,
            }),
            isRequired: true,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Jewelry',
                  label: 'Jewelry',
                }),
                expect.objectContaining({
                  key: 'Bag',
                  label: 'Bag',
                }),
                expect.objectContaining({
                  key: 'Shoes',
                  label: 'Shoes',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
          }),
          expect.objectContaining({
            name: 'engraving',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Engraving',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Engraving',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'text',
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            name: 'type',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Type',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Type',
              fr: undefined,
            }),
            isRequired: true,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Jewelry',
                  label: 'Jewelry',
                }),
                expect.objectContaining({
                  key: 'Bag',
                  label: 'Bag',
                }),
                expect.objectContaining({
                  key: 'Shoes',
                  label: 'Shoes',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
          }),
          expect.objectContaining({
            name: 'engraving',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Engraving',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'Engraving',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'text',
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
        ]),
      })
    );
  });

  it(`should create an accesories product type draft when built for GraphQl`, () => {
    const accesoriesProductType =
      accessories().buildGraphql<TProductTypeDraftGraphql>();
    expect(accesoriesProductType).toEqual(
      expect.objectContaining({
        key: 'accessories',
        name: 'Accessories',
        description: 'Accessories',
        __typename: 'ProductTypeDraft',
        attributeDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: 'type',
            label: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Type',
                __typename: 'LocalizedString',
              }),
            ]),
            inputTip: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Type',
                __typename: 'LocalizedString',
              }),
            ]),
            isRequired: true,
            type: expect.objectContaining({
              name: 'enum',
              __typename: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Jewelry',
                  label: 'Jewelry',
                }),
                expect.objectContaining({
                  key: 'Bag',
                  label: 'Bag',
                }),
                expect.objectContaining({
                  key: 'Shoes',
                  label: 'Shoes',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: true,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
          expect.objectContaining({
            name: 'engraving',
            label: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Engraving',
                __typename: 'LocalizedString',
              }),
            ]),
            inputTip: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'Engraving',
                __typename: 'LocalizedString',
              }),
            ]),
            isRequired: false,
            type: expect.objectContaining({
              name: 'text',
              __typename: 'text',
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
        ]),
      })
    );
  });
});
