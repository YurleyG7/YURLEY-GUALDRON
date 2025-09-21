import { Controller, Get, Post } from '@nestjs/common';

@Controller('client')
export class ClientController {
    //Pedir Café
    @Post()
    askForCoffee() {
        return 'Se solicita un café';
    }

}
