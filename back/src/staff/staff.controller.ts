import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { StaffService } from "./staff.service";
import { CreateStaffDto, UpdateStaffDto } from "./dto/staff.dto";
import { Staff } from "./entities/staff.entity";


@Controller('staff')
export class StaffController {
    constructor(private readonly staffService: StaffService) { }

    @Post('add')
    async create(@Body() createStaffDto: CreateStaffDto): Promise<string | Staff> {
        return await this.staffService.addStaff(createStaffDto);
    }

    @Get('all')
    async getFindAll(): Promise<Staff[]> {
        return await this.staffService.findAll();
    }

    @Patch(':id')
    async getUpdate(@Param('id') id: number, @Body() updateStaffDto: UpdateStaffDto): Promise<string> {
        return await this.staffService.update(id, updateStaffDto);
    }
}