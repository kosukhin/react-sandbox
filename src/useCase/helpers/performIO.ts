export const performIO = (io: any) => io.unsafePerformIO ? io.unsafePerformIO() : null
