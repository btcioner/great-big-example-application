// app
import { RESTService } from './rest.service';
import { SocketService } from './socket.service';
import { RouterExtensions } from './router-extensions.service';
import { UserService } from './user.service';
import { customHttpProvider } from '../../blocks/interceptor/http.provider';

export const CORE_PROVIDERS: any[] = [
    RESTService,
    SocketService,
    RouterExtensions,
    UserService,
    customHttpProvider()
];

export * from './router-extensions.service';
