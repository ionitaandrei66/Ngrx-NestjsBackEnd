import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';

export interface AuthModel {
  username?: string;
  password?: string;
  role?: string;
  uuid?: string;
}

export const user: AuthModel | null = {
  username: 'Andrei',
  password: 'andrei',
  role: 'admin',
  uuid: '12412541251512',
};

@Controller('auth')
export class AuthController {
  @Get('getAuth')
  async getAuth(): Promise<AuthModel> {
    return user;
  }

  @Post('register')
  async register(@Body() req): Promise<AuthModel> {
    if (req.username && req.password) {
      user.username = req.username;
      user.password = req.password;
      user.role = 'client'; //  :))
      user.uuid = randomUUID();
    }
    return user;
  }
  // Ia ia login doesnt exist and what?! :))
}
