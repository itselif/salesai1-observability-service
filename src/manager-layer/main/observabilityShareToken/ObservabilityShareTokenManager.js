const { HttpServerError, HttpError, PaymentGateError } = require("common");
const { hexaLogger } = require("common");
const { ElasticIndexer } = require("serviceCommon");

const ObservabilityServiceManager = require("../../service-manager/ObservabilityServiceManager");

/* Base Class For the Crud Routes Of DbObject ObservabilityShareToken */
class ObservabilityShareTokenManager extends ObservabilityServiceManager {
  constructor(request, options) {
    super(request, options);
    this.objectName = "observabilityShareToken";
    this.modelName = "ObservabilityShareToken";
  }

  toJSON() {
    const jsonObj = super.toJSON();

    return jsonObj;
  }
}

module.exports = ObservabilityShareTokenManager;
