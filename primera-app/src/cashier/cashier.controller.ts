import { Controller, Post } from '@nestjs/common';

@Controller('cashier')
export class CashierController {
    @Post()
    createSalesRecord(){
        console.log('Tu registro de ventas se ha creado correctamente');
    }
}
