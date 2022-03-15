import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(Admin) private adminRepo: Repository<Admin>
    ) {}

    async getAdmin() {
        return await this.adminRepo.find();
    }
}
