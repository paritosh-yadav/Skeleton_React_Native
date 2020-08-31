// @flow
const api = {
    initiateAPICall() {
        return Promise.resolve({
            data: [
                { id: 1, name: "Avondale Brewing Co." },
                { id: 2, name: "Trim Tab Brewing" },
            ],
        });
    },
};

export default api;
