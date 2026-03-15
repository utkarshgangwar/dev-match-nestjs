### Install nest cli - 
#### npm i -g @nest/cli
### run on dev env - 
#### npm run start:dev

# Modules
#### Modules are great for organizing components
### generate with cli cmd - 
#### nest generate module <name>

### Create a controller file cmd:
### nest generate controller profiles

## DTO
### Data transfer object
### A definition for incoming data

## Service
#### nest generate service <name>
#### Business logic is defined in service

# Covered:
## HttpCode
## HttpStatus
## HttpException
## NotFoundException
## Exception/Error Handling
### The exception defined in the service layer will take priority upon defined in the controller layer
### It is good to handle exception/error at the controller layer, rather than on service layer. Let the service layer be for business logic.

## Pipes - transformation, validation

### transformation: allows us to input data into desired form ex: string to integer.
#### PaseUUIDPipe
### validation: ensures input data meets certain rules before proceeding lifecycle.
#### npm i class-validator class-transformer
#### in the dto, import them, attach to the arguments
#### bind them in controller layer
### NOTE: Its more common to protect our endpoints to bound at the app layer

## Guards - To determine the given request will be handle by route handler or not.
### npm generate guard profiles
#### ex: Authorization
### A guard must implement a "canActivate" method/fn


