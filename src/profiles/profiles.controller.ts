import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  //   HttpException,
  NotFoundException,
  ParseUUIDPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';
import type { UUID } from 'crypto';
import { ProfilesGuard } from './profiles.guard';

/**
 * The below code is a decorator
 * Which is a higher order function
 * Higher-order functions in JavaScript are functions that
 * operate on other functions by either accepting one
 * or more functions as arguments
 * or returning a new function as a result.
 */
@Controller('profiles')
export class ProfilesController {
  // initialize our service in a constructor
  constructor(private profileSerivce: ProfilesService) {}
  // GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return this.profileSerivce.findAll();
  }

  // GET /profiles/:id
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profileSerivce.findOne(id);
    // throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    // throw new NotFoundException();
  }

  // POST /profiles
  @Post()
  create(
    @Body(new ValidationPipe()) createProfileDto: CreateProfileDto,
  ): CreateProfileDto {
    return this.profileSerivce.create(createProfileDto);
  }

  // PUT  /profiles/:id
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    // @Body(new ValidationPipe()) updateProfile: UpdateProfileDto,
    // Pipe is defined at bootstrap file i.e., main.ts
    @Body() updateProfile: UpdateProfileDto,
  ) {
    try {
      return this.profileSerivce.update(id, updateProfile);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new NotFoundException(error.message);
      }
    }
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @UseGuards(ProfilesGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profileSerivce.remove(id);
  }
}
