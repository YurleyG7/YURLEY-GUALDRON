import { Controller, Delete, Param, Post } from '@nestjs/common';

@Controller('client')
export class ClientController {
    //Pedir Café
    @Post()
    askForCoffee() {
        return 'Se solicita un café';
    }
    @Delete("/:id/:name")
    deleteSalesRecord(@Param('id') id:number, @Param('name') name:string ) {
        return (
            'Se elimino el registro del café con id' + 
            id +  
            'y se pauso la venta:' +
            name
        );
    }
}
