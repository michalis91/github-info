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

    async getUserData(username: string): Promise<any> {
        const url = `${this.baseUrl}/users/${username}`;
        return this.httpGet(url);
    }

    async getUserRepos(username: string): Promise<any> {
        const url = `${this.baseUrl}/users/${username}/repos`;
        return this.httpGet(url);
    }

    async getUserGists(username: string): Promise<any> {
        const url = `${this.baseUrl}/users/${username}/gists`;
        return this.httpGet(url);
    }

    async getUserOrgs(username: string): Promise<any> {
        const url = `${this.baseUrl}/users/${username}/orgs`;
        return this.httpGet(url);
    }

    private async httpGet(url: string): Promise<any> {
        try {
            const response = await firstValueFrom(this.httpService.get(url));
            return response.data;
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                const message =
                    status === 403
                        ? 'Rate limit exceeded. Please try again later.'
                        : `Request failed with status ${status}`;
                throw new HttpException(message, HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException(
                    'An error occurred while making the request.',
                    HttpStatus.INTERNAL_SERVER_ERROR
                );
            }
        }
    }
}
