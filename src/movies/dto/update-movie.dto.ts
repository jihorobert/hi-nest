import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

// * PartialType을 사용하면 CreateMovieDto의 필드들이 모두 optional로 바뀜
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
