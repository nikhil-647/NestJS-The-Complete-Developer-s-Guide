import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {}
    storeData(data: string) {
        console.log('Storing data on disk');
        this.powerService.supplyPower(10);
        return data;
    }
}
