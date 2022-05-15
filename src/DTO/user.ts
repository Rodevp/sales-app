export class UserDTO {

    private id: string
    private name: string
    private role: string
    private email: string

    constructor(id: string, name: string, role: string, email: string) {
        this.id = id
        this.name = name
        this.role = role
        this.email = email
    }

}