import { Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../../domain/interfaces/user.repository.interface';
import { UserEntity } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../../domain/dtos/create-user.dto';

@Injectable()
export class MongoUserRepository implements UserRepositoryInterface {
  async create(user: CreateUserDto): Promise<UserEntity> {
    // Mock implementation (replace with actual MongoDB logic)
    return {
      id: '1',
      name: user.name,
      email: user.email,
      createdAt: new Date(),
    };
  }

  async findAll(): Promise<UserEntity[]> {
    // Mock implementation
    return [];
  }

  async findById(id: string): Promise<UserEntity | null> {
    // Mock implementation
    return null;
  }
} 