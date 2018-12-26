export interface Device {
    id: string,
	status: 'online' | 'offline';
    name: string;
    type: string;
    version?: string;
    description?: string;
    lastPollTime: number;
}
