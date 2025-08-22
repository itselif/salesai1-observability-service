const {
  HttpServerError,
  BadRequestError,
  NotAuthenticatedError,
  ForbiddenError,
  NotFoundError,
} = require("common");
const { hexaLogger } = require("common");
const { ObservabilityShareToken } = require("models");
const { Op } = require("sequelize");

const getObservabilityShareTokenByStoreId = async (storeId) => {
  try {
    const observabilityShareToken = await ObservabilityShareToken.findOne({
      where: {
        storeId: storeId,
        isActive: true,
      },
    });

    if (!observabilityShareToken) {
      return null;
    }
    return observabilityShareToken.getData();
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingObservabilityShareTokenByStoreId",
      err,
    );
  }
};

module.exports = getObservabilityShareTokenByStoreId;
