// import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { Person } from '../entities/person.entity';
import { DataSource } from 'typeorm';


@Injectable()
export class PersonRepository {

    constructor(private dataSource: DataSource) { }
    personRepository = this.dataSource.getRepository(Person);

    // Search all users
    async GetAllPersons(): Promise<Person[]> {
        try {
            return await this.personRepository.find()
        } catch (error) {
            return error;
        }
    }

    // Search one user by ID
    async GetPersonById(personId: number): Promise<Person> {
        try {
            return await this.personRepository.findOneBy({
                id: personId
            });
        } catch (error) {
            return error;
        }

    }

    // Search one users by EMAIL
    async GetPersonByEmail(email: string): Promise<Person> {
        try {
            return await this.personRepository.findOneBy({
                email: email
            });
        } catch (error) {
            return error;
        }

    }

    // Create one user if didn't exist
    async CreatePerson(
        lastName: string,
        firstName: string,
        email: string,
        password: string,
        adress: string,
        birthday: Date,
        isActive: boolean
    ): Promise<Person> {
        try {
            const person = await this.personRepository.create(
                { firstName, lastName, email, password, adress, birthday, isActive }
            );
            return this.personRepository.save(person);
        } catch (error) {
            return error;
        }
    }

    // Update one users
    async updatePerson(
        personId: number,
        lastName: string,
        firstName: string,
        email: string,
        password: string,
        adress: string,
        birthday: Date,
        isActive: boolean
    ): Promise<Person> {

        try {
            const person = await this.personRepository.findOneBy({ id: personId });
            person.lastName = lastName;
            person.firstName = firstName;
            person.email = email;
            person.password = password;
            person.adress = adress;
            person.birthday = birthday;
            person.isActive = isActive;
            return this.personRepository.save(person);
        } catch (error) {
            return error;
        }
    }

    // Delete one users
    deletePerson(personId: number) {
        try {
            this.personRepository.delete(personId);
            return "Person is deleted";
        } catch (error) {
            return error;
        }
    }
}