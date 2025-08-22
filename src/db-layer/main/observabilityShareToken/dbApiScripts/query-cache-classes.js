const { QueryCache, QueryCacheInvalidator } = require("common");

const { Op } = require("sequelize");

class ObservabilityShareTokenQueryCache extends QueryCache {
  constructor(input, wClause) {
    super("observabilityShareToken", [], Op.and, Op.eq, input, wClause);
  }
}
class ObservabilityShareTokenQueryCacheInvalidator extends QueryCacheInvalidator {
  constructor() {
    super("observabilityShareToken", []);
  }
}

module.exports = {
  ObservabilityShareTokenQueryCache,
  ObservabilityShareTokenQueryCacheInvalidator,
};
