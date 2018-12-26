export interface Poll {
    id: string;
    deviceId: string;
    [metricId: string]: any;
}