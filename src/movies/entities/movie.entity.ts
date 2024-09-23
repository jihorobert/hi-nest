/**
 * 서비스로 보내고 받을 클래스(인터페이스)를 export 함
 * - 즉 movie를 구성하는 그 자체를 export함
 * - 지금 프로젝트에서는 javascript object를 사용하지만
 * - 실제로는 데이터베이스를 사용할 것이기 때문에 entity를 만들어줌
 */

export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
