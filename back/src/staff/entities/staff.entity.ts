import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'staff' })
export class Staff {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    age: number;

    @Column()
    profession: string;

    @Column()
    registration: string;

    @Column()
    url_img: string;

    constructor(name: string, surname: string, age: number, profession: string, registration: string, urlImg: string) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.profession = profession;
        this.registration = registration;
        this.url_img = urlImg;
    }

    public getId(): number {
        return this.id;
    }
    public getName(): string {
        return this.name;
    }
    public getSurname(): string {
        return this.surname;
    }
    public getAge(): number {
        return this.age;
    }
    public getProfession(): string {
        return this.profession;
    }
    public getRegistration(): string {
        return this.registration;
    }
    public getUrlImg(): string {
        return this.url_img;
    }
    public setName(newName: string): void {
        this.name = newName;
    }
    public setSurname(newSurname: string): void {
        this.surname = newSurname;
    }
    public setAge(newAge: number): void {
        this.age = newAge;
    }
    public setProfession(newProfession: string): void {
        this.profession = newProfession;
    }
    public setRegistration(newRegistration: string): void {
        this.registration = newRegistration;
    }
    public setUrlImg(newUrlImg: string): void {
        this.url_img = newUrlImg;
    }
}