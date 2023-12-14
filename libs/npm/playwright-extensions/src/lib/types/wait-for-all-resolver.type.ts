export type WAIT_FOR_ALL_RESOLVER<VALUE> = VALUE extends {waitForAll: boolean} ? VALUE["waitForAll"] : true
