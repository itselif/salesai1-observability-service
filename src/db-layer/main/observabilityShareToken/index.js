const utils = require("./utils");
const dbApiScripts = require("./dbApiScripts");

module.exports = {
  createObservabilityShareToken: utils.createObservabilityShareToken,
  getIdListOfObservabilityShareTokenByField:
    utils.getIdListOfObservabilityShareTokenByField,
  getObservabilityShareTokenById: utils.getObservabilityShareTokenById,
  getObservabilityShareTokenAggById: utils.getObservabilityShareTokenAggById,
  getObservabilityShareTokenListByQuery:
    utils.getObservabilityShareTokenListByQuery,
  getObservabilityShareTokenStatsByQuery:
    utils.getObservabilityShareTokenStatsByQuery,
  getObservabilityShareTokenByQuery: utils.getObservabilityShareTokenByQuery,
  updateObservabilityShareTokenById: utils.updateObservabilityShareTokenById,
  updateObservabilityShareTokenByIdList:
    utils.updateObservabilityShareTokenByIdList,
  updateObservabilityShareTokenByQuery:
    utils.updateObservabilityShareTokenByQuery,
  deleteObservabilityShareTokenById: utils.deleteObservabilityShareTokenById,
  deleteObservabilityShareTokenByQuery:
    utils.deleteObservabilityShareTokenByQuery,
  getObservabilityShareTokenByStoreId:
    utils.getObservabilityShareTokenByStoreId,
};
