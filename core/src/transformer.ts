import { buildField, buildFields } from './helpers';
import type {
  TTransformer,
  TTransformerOptions,
  TBuilder,
  TTransformType,
  TTransformFnParams,
} from './types';

const isBuilder = (value?: unknown): boolean => {
  const fieldValue =
    value && Array.isArray(value) && value.length > 0 ? value[0] : value;
  return Boolean(fieldValue) && fieldValue.build instanceof Function;
};

function Transformer<Model, TransformedModel>(
  transformType: TTransformType,
  transformOptions: TTransformerOptions<Model, TransformedModel>
): TTransformer<Model> {
  function transform(params: TTransformFnParams<Model>) {
    let transformedFields: Model = { ...params.fields };
    const fieldsReplacer = transformOptions?.replaceFields;
    const fieldsAdder = transformOptions?.addFields;
    const fieldsToRemove = transformOptions?.removeFields;
    const fieldsToBuild = transformOptions?.buildFields;

    if (fieldsToBuild && Array.isArray(fieldsToBuild)) {
      fieldsToBuild.forEach((fieldToBuild) => {
        const field = transformedFields[fieldToBuild] as unknown as
          | TBuilder<Model>
          | TBuilder<Model>[];
        // Build only fields that are not null or undefined
        if (field) {
          transformedFields = {
            ...transformedFields,
            [fieldToBuild]: Array.isArray(field)
              ? buildFields<Model>(field, transformType, {
                  fieldToBuild,
                })
              : buildField<Model>(field, transformType, {
                  fieldToBuild,
                }),
          };
        }
      });
    } else if (fieldsToBuild === 'all') {
      for (const [key, value] of Object.entries(transformedFields as {})) {
        if (!value || !isBuilder(value)) continue;
        const fieldKey = key as keyof Model;
        const fieldValue = value as unknown as
          | TBuilder<Model>
          | TBuilder<Model>[];
        transformedFields[fieldKey] = Array.isArray(fieldValue)
          ? (buildFields<Model>(fieldValue, transformType, {
              fieldToBuild: fieldKey,
            }) as unknown as Model[keyof Model])
          : (buildField<Model>(fieldValue, transformType, {
              fieldToBuild: fieldKey,
            }) as unknown as Model[keyof Model]);
      }
    }

    // The default transformer only allows building nested fields to not
    // allow re-transforming model shape
    if (transformType === 'default') {
      return transformedFields as unknown as TransformedModel;
    }

    // If this is defined, all other options are ignored, as the transformed value
    // can be anything (object, array, scalar, etc.).
    if (fieldsReplacer) {
      if (fieldsAdder) {
        console.warn(
          `The "replaceFields" option takes precedence over the "addFields" option, making it unused.`
        );
      }
      if (fieldsToRemove) {
        console.warn(
          `The "replaceFields" option takes precedence over the "removeFields" option, making it unused.`
        );
      }
      return fieldsReplacer({
        fields: transformedFields,
      }) as unknown as TransformedModel;
    }

    if (fieldsAdder) {
      const fieldsToAdd = fieldsAdder({ fields: params.fields });
      Object.entries(fieldsToAdd).forEach(([fieldName, fieldValue]) => {
        // @ts-ignore: TS does not know about the `Model` being an object.
        if (transformedFields[fieldName]) return;
        transformedFields = {
          ...transformedFields,
          [fieldName]: fieldValue,
        };
      });
    }

    if (fieldsToRemove) {
      fieldsToRemove.forEach((fieldToRemove) => {
        delete transformedFields[fieldToRemove];
      });
    }

    return transformedFields as unknown as TransformedModel;
  }

  return { type: transformType, transform };
}

export default Transformer;
