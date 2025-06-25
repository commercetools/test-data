import {
  RestModelBuilder,
  GraphqlModelBuilder,
  CompatParcelMeasurementsModelBuilder,
} from './builders';
import type {
  TParcelMeasurementsRest,
  TParcelMeasurementsGraphql,
} from './types';

const validateModel = (
  model: TParcelMeasurementsRest | TParcelMeasurementsGraphql,
  options?: {
    heightInMillimeter?: number | null;
    lengthInMillimeter?: number | null;
    widthInMillimeter?: number | null;
    weightInGram?: number | null;
  }
) => {
  expect(model).toEqual(
    expect.objectContaining({
      heightInMillimeter: options?.heightInMillimeter || expect.any(Number),
      lengthInMillimeter: options?.lengthInMillimeter || expect.any(Number),
      widthInMillimeter: options?.widthInMillimeter || expect.any(Number),
      weightInGram: options?.weightInGram || expect.any(Number),
    })
  );
};

describe('ParcelMeasurements model builders', () => {
  it('builds a REST model', () => {
    const restModel = RestModelBuilder().build();
    validateModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = RestModelBuilder()
      .heightInMillimeter(100)
      .lengthInMillimeter(200)
      .widthInMillimeter(150)
      .weightInGram(500)
      .build();

    validateModel(restModel, {
      heightInMillimeter: 100,
      lengthInMillimeter: 200,
      widthInMillimeter: 150,
      weightInGram: 500,
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder().build();

    validateModel(graphqlModel);
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'ParcelMeasurements',
      })
    );
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = GraphqlModelBuilder()
      .heightInMillimeter(250)
      .lengthInMillimeter(300)
      .widthInMillimeter(180)
      .weightInGram(750)
      .build();

    validateModel(graphqlModel, {
      heightInMillimeter: 250,
      lengthInMillimeter: 300,
      widthInMillimeter: 180,
      weightInGram: 750,
    });
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'ParcelMeasurements',
      })
    );
  });
});

describe('ParcelMeasurements model compatibility builders', () => {
  it('builds a REST model', () => {
    const restModel = CompatParcelMeasurementsModelBuilder().buildRest();
    validateModel(restModel);
  });

  it('builds a populated REST model', () => {
    const restModel = CompatParcelMeasurementsModelBuilder()
      .heightInMillimeter(120)
      .lengthInMillimeter(220)
      .widthInMillimeter(160)
      .weightInGram(450)
      .buildRest();

    validateModel(restModel, {
      heightInMillimeter: 120,
      lengthInMillimeter: 220,
      widthInMillimeter: 160,
      weightInGram: 450,
    });
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = CompatParcelMeasurementsModelBuilder().buildGraphql();
    validateModel(graphqlModel);
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'ParcelMeasurements',
      })
    );
  });

  it('builds a populated GraphQL model', () => {
    const graphqlModel = CompatParcelMeasurementsModelBuilder()
      .heightInMillimeter(80)
      .lengthInMillimeter(350)
      .widthInMillimeter(200)
      .weightInGram(600)
      .buildGraphql();

    validateModel(graphqlModel, {
      heightInMillimeter: 80,
      lengthInMillimeter: 350,
      widthInMillimeter: 200,
      weightInGram: 600,
    });
    expect(graphqlModel).toMatchObject(
      expect.objectContaining({
        __typename: 'ParcelMeasurements',
      })
    );
  });
});
