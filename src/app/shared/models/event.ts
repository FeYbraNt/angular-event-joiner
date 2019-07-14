import City from './city';

export default class Event {
    id: number;
    isFree: boolean;
    name: string;
    city: City;
    startDate: Date;
    endDate: Date;
}