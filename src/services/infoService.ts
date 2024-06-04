import axios from "axios";

export const infoService = {
    getAppInfoAsync: async () => {
        // const response = await axios.get("/api/info");          
        // return response.data.app;
        return {
            name: "app name",
            description: "app description",
            repositoryOptional: `https://github.com/rohit-lakhanpal/minimal-fast-api`,
            faviconOptional: null,            
        }
    }
};