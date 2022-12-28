export class User {
    Name: string;
    Email: string;
    Phone: number;
    Age: number;
    Password: string;
}


export function Age(birthDate: Date): number {
    let date  = new Date()
    let myAge = date.getDate() - birthDate.getDate()
    return myAge
}