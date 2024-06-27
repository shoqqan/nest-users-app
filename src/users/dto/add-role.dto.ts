import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @IsString({ message: 'Должен быть строкой' })
  readonly value: string;
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
}
