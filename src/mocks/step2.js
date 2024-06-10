
export const mockStep2 = ( value ) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (Number(value) < 18) {
                resolve({
                    success: false,
                    errors: {
                        message: "Age must be more than 18",
                    },
                });
            } else {
                resolve({ success: true });
            }
        }, 1000);
    });
};