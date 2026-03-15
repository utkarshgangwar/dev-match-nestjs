import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

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
    constructor(private profileSerivce: ProfilesService){}
    // GET /profiles
    @Get()
    findAll(@Query('location') location: string){
        return this.profileSerivce.findAll();
    }

    // GET /profiles/:id
    @Get(':id')
    findOne(@Param('id') id: string){
        return { id };
    }

    // POST /profiles
    @Post()
    create(@Body() createProfileDto: CreateProfileDto){
        return {
            name: createProfileDto.name,
            description: createProfileDto.description,
        };
    }

    // PUT  /profiles/:id
    @Put(':id')
    update(@Param('id') id: string, @Body() updateProfile: UpdateProfileDto){
        return {
            id: id,
            name: updateProfile.name,
            description: updateProfile.description,
        }
    }

    // DELETE /profiles/:id
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string){
        return {
            id: id
        }
    }
}
