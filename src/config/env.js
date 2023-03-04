
export const checkBaseURLS = () => {
    const env = process.env.NODE_ENV
    console.log("env == ", process.env.NODE_ENV)

    if (env == "development") {
        return "http://localhost:5000"
    } else {
        return "http://api.mvishal.link"
    }
}

export const base_url = checkBaseURLS()