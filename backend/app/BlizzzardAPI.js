const { RESTDataSource } = require('apollo-datasource-rest');
const { REGIONS, CATEGORIES } = require('./constants');

class BlizzardAPI extends RESTDataSource {
  get baseURL() {
    const region = this.context.region;
    if (region === REGIONS.CN) {
      return 'https://gateway.battlenet.com.cn/';
    }
    return 'https://{region}.api.blizzard.com/'.replace('{region}', region);
  }

  async willSendRequest(request) {
    return this.context.token.then(token => {
      request.headers.set('Authorization', `Bearer ${token}`);
    });
  }

  async getRealms() {
    return this.get(`data/wow/search/connected-realm`, {
      namespace: `${CATEGORIES.DYNAMIC}-${this.context.region}`,
    });
  }

  async getAuctions({ connectedRealmId }) {
    return this.get(`data/wow/connected-realm/${connectedRealmId}/auctions`, {
      namespace: `${CATEGORIES.DYNAMIC}-${this.context.region}`,
    });
  }

  async getItem({ itemId }) {
    return this.get(`data/wow/item/${itemId}`, {
      namespace: `${CATEGORIES.STATIC}-${this.context.region}`,
    });
  }
}

module.exports = BlizzardAPI;
