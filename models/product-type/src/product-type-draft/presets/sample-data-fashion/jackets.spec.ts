import type {
  TProductTypeDraft,
  TProductTypeDraftGraphql,
} from '../../../types';
import jackets from './jackets';

describe(`with jackets preset`, () => {
  it(`should create a jackets product type draft`, () => {
    const jacketsProductType = jackets().build<TProductTypeDraft>();
    expect(jacketsProductType).toEqual(
      expect.objectContaining({
        key: 'jackets',
        name: 'Jackets',
        description: 'Jackets',
        attributeDefinitions: expect.arrayContaining([
          expect.objectContaining({
            name: 'sleeve_length',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'sleeve_length',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'sleeve_length',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Crop',
                  label: 'Crop',
                }),
                expect.objectContaining({
                  key: 'Normal',
                  label: 'Normal',
                }),
                expect.objectContaining({
                  key: 'Extra Long',
                  label: 'Extra Long',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
          expect.objectContaining({
            name: 'cotton',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'cotton',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'cotton',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'boolean',
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
        ]),
        attributes: expect.arrayContaining([
          expect.objectContaining({
            name: 'sleeve_length',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'sleeve_length',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'sleeve_length',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Crop',
                  label: 'Crop',
                }),
                expect.objectContaining({
                  key: 'Normal',
                  label: 'Normal',
                }),
                expect.objectContaining({
                  key: 'Extra Long',
                  label: 'Extra Long',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
          expect.objectContaining({
            name: 'cotton',
            label: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'cotton',
              fr: undefined,
            }),
            inputTip: expect.objectContaining({
              de: undefined,
              en: undefined,
              'en-US': 'cotton',
              fr: undefined,
            }),
            isRequired: false,
            type: expect.objectContaining({
              name: 'boolean',
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
          }),
        ]),
      })
    );
  });

  it(`should create a jackets product type draft when built for graphql`, () => {
    const jacketsProductTypeGraphql =
      jackets().buildGraphql<TProductTypeDraftGraphql>();
    expect(jacketsProductTypeGraphql).toEqual(
      expect.objectContaining({
        key: 'jackets',
        name: 'Jackets',
        description: 'Jackets',
        __typename: 'ProductTypeDraft',
        attributeDefinitions: [
          expect.objectContaining({
            name: 'sleeve_length',
            label: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'sleeve_length',
                __typename: 'LocalizedString',
              }),
            ]),
            inputTip: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'sleeve_length',
                __typename: 'LocalizedString',
              }),
            ]),
            isRequired: false,
            type: expect.objectContaining({
              name: 'enum',
              __typename: 'enum',
              values: expect.arrayContaining([
                expect.objectContaining({
                  key: 'Crop',
                  label: 'Crop',
                }),
                expect.objectContaining({
                  key: 'Normal',
                  label: 'Normal',
                }),
                expect.objectContaining({
                  key: 'Extra Long',
                  label: 'Extra Long',
                }),
              ]),
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
          expect.objectContaining({
            name: 'cotton',
            label: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'cotton',
                __typename: 'LocalizedString',
              }),
            ]),
            inputTip: expect.arrayContaining([
              expect.objectContaining({
                locale: 'en-US',
                value: 'cotton',
                __typename: 'LocalizedString',
              }),
            ]),
            isRequired: false,
            type: expect.objectContaining({
              name: 'boolean',
              __typename: 'boolean',
            }),
            attributeConstraint: 'None',
            isSearchable: false,
            inputHint: 'SingleLine',
            __typename: 'AttributeDefinitionDraft',
          }),
        ],
      })
    );
  });
});
