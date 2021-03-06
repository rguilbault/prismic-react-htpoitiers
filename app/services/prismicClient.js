import Prismic from 'prismic-javascript';
import Cookies from 'js-cookie';

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

    linkResolver(doc) {
        switch(doc.type) {
            case 'evenement':
                return '/event/' + doc.id;
            case 'conference':
                return '/conference/' + doc.id;
            case 'presentation':
                return '/';
            default:
                return '/404';
        }
    }

    checkApi() {
        return new Promise(resolve => {
            if(this.api === null) {
                const generalOptions = Object.assign({},
                    this.token ? {accessToken: this.token} : {}
                );
                Prismic.api(this.apiEndpoint, generalOptions).then(api => {
                    this.api = api;
                    const previewRef = Cookies.get(this.api.previewCookie);
                    if(previewRef &&
                        // Prevent fetch releases when not use preview
                        (location.pathname === "/p")
                        ) {
                        this.apiOptions = {
                            ref: previewRef.ref
                        }
                    } else {
                        const ref = api.refs.filter(ref => ref.label === this.refName);
                        this.apiOptions = {
                            ref: ref.length > 0 ? ref[0].ref : api.master()
                        }
                    }
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }
    
    queryAllByDocumentType(docType, options) {
        const allOptions = Object.assign({}, this.apiOptions, options);
        return this.api && this.api.query(Prismic.Predicates.at('document.type', docType), allOptions);
    }

    queryByDocumentId(docId) {
        return this.api && this.api.queryFirst(Prismic.Predicates.at('document.id', docId), this.apiOptions);
    }

    queryAllByDocumentIds(docIds, options) {
        const allOptions = Object.assign({}, this.apiOptions, options);
        return this.api && this.api.query(Prismic.Predicates.any('document.id', docIds), allOptions);
    }

    search(query, options) {
        const allOptions = Object.assign({}, this.apiOptions, options);
        return this.api && this.api.query(query, allOptions);
    }

    preview(token) {
        return this.api && this.api.previewSession(token, this.linkResolver);
    }
}

const client = new PrismicClient();

export default client;