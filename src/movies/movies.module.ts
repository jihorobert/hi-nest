import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

/**
 * * nest g mo로 생성
 * 앱을 만들때는 모듈로 분리해야 좋음
 * MoviesService를 provider로 넣는 것 만으로 MoviesController에서 사용 가능
 * -> dependency injection
 */
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
