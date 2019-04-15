import Prismic from 'prismic-javascript';

class PrismicClient {
    constructor() {
        this.apiEndpoint = 'https://htpoitiers-rguilbault.prismic.io/api/v2';
        this.api = null;
    }

    checkApi() {
        return new Promise((resolve => {
            if(this.api === null) {
                Prismic.api(this.apiEndpoint).then(api => {
                    this.api = api;
                    resolve();
                });
            } else {
                resolve();
            }
        }));
    }
    
    queryAllByDocumentType(docType) {
        return this.api && this.api.query(Prismic.Predicates.at('document.type', docType));
    }

    queryByDocumentId(docId) {
        return this.api && this.api.queryFirst(Prismic.Predicates.at('document.id', docId));
    }
}

const client = new PrismicClient();

export default client;