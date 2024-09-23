import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

/**
 * * nest g co로 생성
 *
 * @Controller('뭐시기') -> 우리url의 entry point를 설정해줌
 */
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // * Get('search')를 밑의 @Get(':id')보다 밑에 두면 search가 id로 인식되어버림
  //   @Get('search')
  //   search(@Query('year') searchingYear: string) {
  //     return `We are searching for a movie after: ${searchingYear}`;
  //   }

  // @Param 이용
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  // Put 말고 Patch를 사용하는 이유는 Put은 모든 리소스를 업데이트하는데 사용되고, Patch는 일부 리소스만 업데이트하는데 사용됨
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
