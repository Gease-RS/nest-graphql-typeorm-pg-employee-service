import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  designation: string;

  @Field({ nullable: true })
  city: string;
}
