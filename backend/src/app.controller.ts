import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(':username')
    async getUser(@Param('username') username: string) {
        return this.appService.getUserData(username);
    }

    @Get(':username/gists')
    async getGists(@Param('username') username: string) {
        return this.appService.getUserGists(username);
    }

    @Get(':username/orgs')
    async getOrgs(@Param('username') username: string) {
        return this.appService.getUserOrgs(username);
    }

    @Get(':username/repos')
    async getRepos(@Param('username') username: string) {
        return this.appService.getUserRepos(username);
    }
}
