import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Delete } from "@nestjs/common";
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

    @Patch('update/:id')
    async getUpdate(@Param('id', ParseIntPipe) id: number, @Body() updateStaffDto: UpdateStaffDto): Promise<string> {
        return await this.staffService.update(id, updateStaffDto);
    }

    @Delete('delete/:id')
    async getDelete(@Param('id', ParseIntPipe) id: number) : Promise<string | void> {
        return await this.staffService.delete(id);
    }
}