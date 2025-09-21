import { Controller, Patch, Post } from '@nestjs/common';

@Controller('cashier')
export class CashierController {
    @Post()
    createSalesRecord() {
        return 'Tu registro de ventas se ha creado correctamente';
    }
    @Patch('update-cash-registrer')
    updateSalesRecord() {
        return 'Se realizo un movimiento de efectivo';
    }
}
