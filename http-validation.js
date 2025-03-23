import fetch from "node-fetch";

function errorTreatment(error) {
    throw new Error(`Error: ${error.message}`);
}

async function checkStatus(urlsArray) {
    try {
        const statusArray = await Promise
            .all(urlsArray
                .map(async url => {
                    const response = await fetch(url);
                    return response.status;
                }));
        return statusArray;
    } catch (error) {
        errorTreatment(error);
    }
}

function urlArrayGenerator(urlsList) {
    return urlsList
        .map(linkObject => Object
            .values(linkObject).join());

}

async function urlsValidation(urlsList) {
    const urls = urlArrayGenerator(urlsList);
    const urlsStatus = await checkStatus(urls);
    const results = urlsList
        .map((object, index) => ({
            ...object,
            status: urlsStatus[index]
        }));
    return results;
}

export default urlsValidation;