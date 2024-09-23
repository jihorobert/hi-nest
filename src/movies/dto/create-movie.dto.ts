import { IsNumber, IsOptional, IsString } from 'class-validator';

/**
 * * DTO
 * NestJS가 들어오는 쿼리에 대해 유효성을 검사할 수 있게 해줌
 * main.ts에서 app.useGlobalPipes(new ValidationPipe())로 설정 -> validation pipe가 모든 request를 가로채서 유효성 검사
 * - 없으면 형식에 맞지 않게 create해도 에러가 발생하지 않음
 * @IsString, @IsNumber, 등의 데코레이터를 사용해서 유효성 검사 -> error message 자동으로 생성
 */
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
