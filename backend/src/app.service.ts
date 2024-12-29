import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { HttpException, HttpStatus } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) {}

    private baseUrl = this.configService.get<string>('GITHUB_API_URL');

    async getUserData(username: string) {
        const url = `${this.baseUrl}/users/${username}`;
        try {
            const response = await firstValueFrom(this.httpService.get(url));
            return response.data;
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    throw new HttpException(
                        'Rate limit exceeded. Please try again later.',
                        HttpStatus.FORBIDDEN
                    );
                }
                throw new HttpException(
                    `Request failed with status ${error.response.status}`,
                    HttpStatus.BAD_REQUEST
                );
            } else {
                throw new HttpException(
                    'An error occurred while fetching user data.',
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
        }
    }

    async getUserGists(username: string) {
        const url = `${this.baseUrl}/users/${username}/gists`;
        try {
            const response = await firstValueFrom(this.httpService.get(url));
            return response.data;
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    throw new HttpException(
                        'Rate limit exceeded. Please try again later.',
                        HttpStatus.FORBIDDEN
                    );
                }
                throw new HttpException(
                    `Request failed with status ${error.response.status}`,
                    HttpStatus.BAD_REQUEST
                );
            } else {
                throw new HttpException(
                    'An error occurred while fetching user data.',
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
        }
    }

    async getUserOrgs(username: string) {
        const url = `${this.baseUrl}/users/${username}/orgs`;
        try {
            const response = await firstValueFrom(this.httpService.get(url));
            return response.data;
        } catch (error) {
            if (error.response) {
                if (error.response.status === 403) {
                    throw new HttpException(
                        'Rate limit exceeded. Please try again later.',
                        HttpStatus.FORBIDDEN
                    );
                }
                throw new HttpException(
                    `Request failed with status ${error.response.status}`,
                    HttpStatus.BAD_REQUEST
                );
            } else {
                throw new HttpException(
                    'An error occurred while fetching user data.',
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
        }
    }
}
