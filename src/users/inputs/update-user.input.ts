import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field() initTime?: Date;
  @Field() finishTime?: Date;
}
