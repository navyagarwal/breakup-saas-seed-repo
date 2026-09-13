export const hasOrderId = (value: unknown): value is { orderId: string } => typeof value === 'object' && value !== null && 'orderId' in value;
