import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Person } from '../entities/person.entity';
import { PersonRepository } from '../person/person.repository';


@Injectable()
export class PersonService {

    constructor(
        @Inject(PersonRepository)
        private readonly personRepository: PersonRepository,
    ) { }

    // Search all users
    async GetAllPersons(): Promise<Person[]> {
        const persons = await this.personRepository.GetAllPersons();
        if (!persons) {
            throw new Error("Erreur, personne non trouvée !");
        }
        return [...persons];
    }

    // Search one user by ID
    async GetPersonById(personId: number): Promise<Person> {
        const person = await this.personRepository.GetPersonById(personId);
        if (!person) {
            throw new Error("Erreur, personne non trouvée !");
        }
        return { ...person };
    }

    // Search one users by EMAIL
    async GetPersonByEmail(email: string): Promise<Person> {
        const person = await this.personRepository.GetPersonByEmail(email);
        if (!person) {
            throw new Error("Erreur, personne non trouvée !");
        }
        return { ...person };
    }

    // Create one user if didn't exist
    async createPerson(
        lastName: string,
        firstName: string,
        email: string,
        password: string,
        adress: string,
        birthday: Date,
        isActive: boolean
    ): Promise<Person> {

        const personInBdd = await this.personRepository.GetPersonByEmail(email);
        if (personInBdd) {
            throw new Error("Erreur : cet utilisateur existe déjà !");
        } else {
            const newPerson = await this.personRepository.CreatePerson(
                firstName, lastName, email, password, adress, birthday, isActive
            );
            return { ...newPerson }
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

        const personInBdd = await this.personRepository.GetPersonByEmail(email);
        if (!personInBdd) {
            throw new NotFoundException('Person to update not found');
        }
        else {
            const personUpdated = await this.personRepository.updatePerson(
                personId, lastName, firstName, email, password, adress, birthday, isActive
            );
            return personUpdated;
        }
    }

    // Delete one users
    async deletePerson(personId: number): Promise<string> {
        const deletedPerson = await this.personRepository.deletePerson(personId);
        return deletedPerson
    } 
}