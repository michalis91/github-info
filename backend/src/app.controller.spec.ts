import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
    let appController: AppController;
    let appService: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [
                {
                    provide: AppService,
                    useValue: {
                        getUserData: jest.fn(),
                        getUserGists: jest.fn(),
                        getUserOrgs: jest.fn(),
                        getUserRepos: jest.fn()
                    }
                }
            ]
        }).compile();

        appController = module.get<AppController>(AppController);
        appService = module.get<AppService>(AppService);
    });

    it('should return user data for getUser', async () => {
        const mockUserData = { id: 1, name: 'Test User' };
        jest.spyOn(appService, 'getUserData').mockResolvedValue(mockUserData);

        const result = await appController.getUser('testuser');
        expect(result).toEqual(mockUserData);
        expect(appService.getUserData).toHaveBeenCalledWith('testuser');
    });

    it('should return user gists for getGists', async () => {
        const mockGists = [{ id: 1, description: 'Test Gist' }];
        jest.spyOn(appService, 'getUserGists').mockResolvedValue(mockGists);

        const result = await appController.getGists('testuser');
        expect(result).toEqual(mockGists);
        expect(appService.getUserGists).toHaveBeenCalledWith('testuser');
    });

    it('should return user organizations for getOrgs', async () => {
        const mockOrgs = [{ id: 1, name: 'Test Org' }];
        jest.spyOn(appService, 'getUserOrgs').mockResolvedValue(mockOrgs);

        const result = await appController.getOrgs('testuser');
        expect(result).toEqual(mockOrgs);
        expect(appService.getUserOrgs).toHaveBeenCalledWith('testuser');
    });

    it('should return user repositories for getRepos', async () => {
        const mockRepos = [{ id: 1, name: 'Test Repo' }];
        jest.spyOn(appService, 'getUserRepos').mockResolvedValue(mockRepos);

        const result = await appController.getRepos('testuser');
        expect(result).toEqual(mockRepos);
        expect(appService.getUserRepos).toHaveBeenCalledWith('testuser');
    });
});
