
export const mockStep1 = ( value ) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (value === "Alessandro") {
                resolve({
                    success: false,
                    errors: {
                        message: "The name is already taken",
                    },
                });
            } else {
                resolve({ success: true });
            }
        }, 1000);
    });
};