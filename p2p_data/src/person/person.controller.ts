import { Controller, Get, Post, Body, Param, Req, Put, Delete } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from '../entities/person.entity';

@Controller('person')
export class PersonController {

    constructor(private readonly personService: PersonService) { }

    // Search all users
    @Get()
    GetAllPersons() {
        return this.personService.GetAllPersons();
    }

    // Search one user by ID
    @Get('id/:id')
    GetPersonById(@Param('id') personId: number) {
        return this.personService.GetPersonById(personId);
    }

    // Search one users by EMAIL
    @Get('email')
    GetPersonByEmail(@Req() req) {
        const email = req.body.email;
        return this.personService.GetPersonByEmail(email);
    }

    // Create one user if didn't exist
    @Post()
    async createPerson(@Req() req) {
        const lastName = req.body.lastName;
        const firstName = req.body.firstName;
        const email = req.body.email;
        const password = req.body.password;
        const adress = req.body.adress;
        const birthday = req.body.birthday;
        const isActive = req.body.isActive;

        return this.personService.createPerson(lastName, firstName, email, password, adress, birthday, isActive);
    }

    // Update one users
    @Put(':id')
    async updatePerson(@Param('id') personId: number, @Req() req): Promise<Person> {
        
        const lastName = req.body.lastName;
        const firstName = req.body.firstName;
        const email = req.body.email;
        const password = req.body.password;
        const adress = req.body.adress;
        const birthday = req.body.birthday;
        const isActive = req.body.isActive;

        const updatedPerson = await this.personService.updatePerson(
            personId, lastName, firstName, email, password, adress, birthday, isActive
        );
        return updatedPerson;
    }

    // Delete one users
    @Delete(':id')
    async deletePerson(@Param('id') personId: number): Promise<string> {
        const deletedPerson = await this.personService.deletePerson(personId);
        return deletedPerson;
    }
}
