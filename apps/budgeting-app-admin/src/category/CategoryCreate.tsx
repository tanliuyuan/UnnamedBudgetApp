import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RecurringTransactionTitle } from "../recurringTransaction/RecurringTransactionTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="recurringTransactions"
          reference="RecurringTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecurringTransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="expenses"
          reference="Expense"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpenseTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
