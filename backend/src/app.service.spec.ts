import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { of } from 'rxjs';
import { AxiosHeaders } from 'axios';
describe('AppService', () => {
    let appService: AppService;
    let httpService: HttpService;
    let configService: ConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppService,
                {
                    provide: HttpService,
                    useValue: {
                        get: jest.fn()
                    }
                },
                {
                    provide: ConfigService,
                    useValue: {
                        get: jest.fn().mockReturnValue('https://api.github.com')
                    }
                }
            ]
        }).compile();

        appService = module.get<AppService>(AppService);
        httpService = module.get<HttpService>(HttpService);
        configService = module.get<ConfigService>(ConfigService);
    });

    it('should be defined', () => {
        expect(appService).toBeDefined();
    });

    describe('getUserRepos', () => {
        it('should return user repos when the request is successful', async () => {
            const mockResponse = {
                data: [{ id: 1, name: 'repo1' }],
                status: 200,
                statusText: 'OK',
                headers: new AxiosHeaders(),
                config: {
                    headers: new AxiosHeaders(),
                    url: '',
                    method: 'get'
                }
            };
            jest.spyOn(httpService, 'get').mockReturnValue(of(mockResponse));

            const result = await appService.getUserRepos('testuser');

            expect(result).toEqual(mockResponse.data);
            expect(httpService.get).toHaveBeenCalledWith(
                'https://api.github.com/users/testuser/repos'
            );
        });
    });
});
