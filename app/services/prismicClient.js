import Prismic from 'prismic-javascript';

class PrismicClient {
    constructor() {
        this.apiEndpoint = 'https://htpoitiers-rguilbault.prismic.io/api/v2';
        this.api = null;
/**/
        // Master
        this.refName = '';
        this.token = '';
/*/
        // Master+Releases
        this.refName = 'HT-mai2019';
        this.token = 'MC5YTXdCUFRFQUFFTUFMYktI.LRbvv73vv73vv71LEHXvv71HMzYq77-977-9AO-_ve-_vVwl77-977-977-977-977-9eQYgQGdQDA';
/**/
        this.apiOptions = {};
    }

    checkApi() {
        return new Promise((resolve => {
            if(this.api === null) {
                const generalOptions = Object.assign({},
                    this.token ? {accessToken: this.token} : {}
                );
                Prismic.api(this.apiEndpoint, generalOptions).then(api => {
                    this.api = api;
                    const ref = api.refs.filter(ref => ref.label === this.refName);
                    this.apiOptions = {
                        ref: ref.length > 0 ? ref[0].ref : api.master()
                    }
                    resolve();
                });
            } else {
                resolve();
            }
        }));
    }
    
    queryAllByDocumentType(docType, options) {
        const allOptions = Object.assign({}, this.apiOptions, options);
        return this.api && this.api.query(Prismic.Predicates.at('document.type', docType), allOptions);
    }

    queryByDocumentId(docId) {
        return this.api && this.api.queryFirst(Prismic.Predicates.at('document.id', docId), this.apiOptions);
    }
}

const client = new PrismicClient();

export default client;