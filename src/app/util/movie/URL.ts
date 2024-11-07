import axios from "axios";
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class URLService {

  // 기존 인기 영화에서 첫 번째 영화를 가져오는 메서드
  fetchFeaturedMovie = async (apiKey: string) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`);
      console.log(response.data.results[0]);
      return response.data.results[0];
    } catch (error) {
      console.error('Error fetching featured movie:', error);
    }
  }

  // 인기 영화 목록 URL 생성 메서드
  getURL4PopularMovies = (apiKey: string, page: number = 1) => {
    return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`;
  }

  // 현재 상영 중인 영화 목록 URL 생성 메서드
  getURL4ReleaseMovies = (apiKey: string, page: number = 2) => {
    return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=${page}`;
  }

  // 특정 장르의 영화 목록 URL 생성 메서드
  getURL4GenreMovies = (apiKey: string, genre: string, page: number = 1) => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&language=ko-KR&page=${page}`;
  }

  // 새로 추가된 최고 평점 영화 목록 URL 생성 메서드
  getURL4TopRatedMovies = (apiKey: string, page: number = 1) => {
    return `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko-KR&page=${page}`;
  }
}