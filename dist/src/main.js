"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./prisma.service");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const prismaService = app.get(prisma_service_1.PrismaService);
    app.enableCors();
    await prismaService.enableShutdownHooks(app);
    await app.listen(process.env.PORT || 4200);
}
bootstrap();
//# sourceMappingURL=main.js.map