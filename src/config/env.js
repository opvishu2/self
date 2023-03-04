
export const checkBaseURLS = () => {
    const env = process.env.NODE_ENV
    console.log("env == ", env)

    if (env == "development") {
        return "http://localhost:5000"
    } else {
        return "https://i.mvishal-api.link"
    }
}

export const base_url = checkBaseURLS()