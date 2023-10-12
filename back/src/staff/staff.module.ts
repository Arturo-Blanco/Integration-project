import { Module } from "@nestjs/common";
import { StaffController } from "./staff.controller";
import { StaffService } from "./staff.service";
import { Staff } from "./entities/staff.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([Staff])
    ],
    providers: [StaffService],
    controllers: [StaffController]
})
export class StaffModule {}