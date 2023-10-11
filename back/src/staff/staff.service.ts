import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './entities/staff.entity';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateStaffDto, UpdateStaffDto } from './dto/staff.dto';


@Injectable()
export class StaffService {
    constructor(
        @InjectRepository(Staff)
        private readonly staffRepository: Repository<Staff>
    ) { }

    async addStaff(createStaffDto: CreateStaffDto): Promise<string | Staff> {
        const { name, surname, age, profession, registration, urlImg } = createStaffDto;
        try {
            const newStaff: Staff = new Staff(name, surname, age, profession, registration, urlImg);
            if (!newStaff) {
                throw new Error(`Error addin professional ${name} ${surname}.`);
            }
            return await this.staffRepository.save(newStaff);

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: error.message
            }, HttpStatus.CONFLICT);
        }
    }

    async findAll(): Promise<Staff[]> {
        try {
            const allStaff: Staff[] = await this.staffRepository.find();
            if (!allStaff) {
                throw new Error('Error getting staf.');
            }
            return allStaff;

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: error.message
            }, HttpStatus.CONFLICT);
        }
    }

    async update(id: number, updateStaffDto: UpdateStaffDto): Promise<string> {
        const { name, surname, age, profession, registration, urlImg } = updateStaffDto;
        try {
            const criteria : FindOneOptions = {where: { id : id}}
            const professional : Staff = await this.staffRepository.findOne(criteria);
            if(!professional) {
                throw new Error(`There is not professional with id : ${id}.`);
            }

            const updatedFields = {name, surname, age, profession, registration, urlImg }
            const updatePromise = Object.entries(updatedFields).map(async ([key, value]) => {
                if(value) {
                    professional[key] = value;
                }
            })

            await Promise.all(updatePromise);
            await this.staffRepository.save(professional);
            return `${name} ${surname} was edited.`

        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message
            }, HttpStatus.BAD_REQUEST);
        }
    }
}