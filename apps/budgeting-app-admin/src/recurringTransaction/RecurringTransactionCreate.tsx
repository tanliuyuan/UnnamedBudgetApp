import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { UserTitle } from "../user/UserTitle";

export const RecurringTransactionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="startDate" source="startDate" />
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="intervalType" source="intervalType" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
