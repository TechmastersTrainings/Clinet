const API_BASE_URL =
    import.meta.env.MODE === "development"
        ? "http://localhost:5000/api"
        : "https://api.techmaster.space/api" ||
        "https://techmasters-innovations-drive.onrender.com/api";

export default API_BASE_URL;