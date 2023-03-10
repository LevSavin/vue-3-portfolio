export type errorsType = string[];

export interface errorsObjectType {
  [key: string]: string[];
  non_field_errors: string[];
}

export type enumType = {
  [key: string]: string[];
};

export type objectType = {
  [key: string]: any;
};
