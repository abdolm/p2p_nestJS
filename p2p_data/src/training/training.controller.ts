import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { TrainingService } from './training.service';
import { Training } from 'src/entities/training.entity';

@Controller('training')
export class TrainingController {
    constructor(private readonly trainingService: TrainingService) {}

    @Get()
    getAllTrainings(){
        return this.trainingService.getAllTrainings();
    }

    @Get(':id')
    getTrainingById(@Param('id') trainingId : number) {
        return this.trainingService.getTrainingById(trainingId);
    }

    @Post()
    async createTraining(@Body('title') title: string) : Promise<Training> {
        return this.trainingService.createTraining(title);
    }

    @Put(':id')
    async updateTraining(
        @Param('id') trainingID: number,
        @Body('title') title: string,
        @Body('isActive') isActive: boolean
    ) : Promise<Training> {
        return this.trainingService.updateTraining(trainingID, title, isActive);
    }

    @Delete(':id')
    deleteTraining(@Param('id') trainingID: number){
        return this.trainingService.deleteTraining(trainingID);
    }
}
