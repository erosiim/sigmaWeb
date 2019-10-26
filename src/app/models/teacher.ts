export class Teacher {
    name: string;
    last_name_phater: string;
    last_name_mother: string;
    title: string;
    role: string;

    get controlNumber(): string{
        return this.controlNumber;
    }

    set controlNumber(controlNumber: string){
        this.controlNumber = controlNumber;
    }
}
