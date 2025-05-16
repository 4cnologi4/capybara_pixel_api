import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryInterface } from '../../domain/interfaces/user.repository.interface';
import { UserEntity } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../domain/dtos/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: UserRepositoryInterface,
    ) { }

    async createUser(user: CreateUserDto): Promise<UserEntity> {
        return this.userRepository.create(user);
    }

    async getUsers(): Promise<UserEntity[]> {
        return this.userRepository.findAll();
    }
} 