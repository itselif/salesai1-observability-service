const { HttpServerError, BadRequestError } = require("common");

const { ObservabilityShareToken } = require("models");
const { Op } = require("sequelize");
const { hexaLogger } = require("common");

const getObservabilityShareTokenByQuery = async (query) => {
  try {
    if (!query || typeof query !== "object") {
      throw new BadRequestError(
        "Invalid query provided. Query must be an object.",
      );
    }

    const observabilityShareToken = await ObservabilityShareToken.findOne({
      where: { ...query, isActive: true },
    });

    if (!observabilityShareToken) return null;
    return observabilityShareToken.getData();
  } catch (err) {
    throw new HttpServerError(
      "errMsg_dbErrorWhenRequestingObservabilityShareTokenByQuery",
      err,
    );
  }
};

module.exports = getObservabilityShareTokenByQuery;
